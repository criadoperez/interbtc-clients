#![allow(dead_code)]

use crate::{utils, Error};
use bitcoin::{BitcoinCore, BitcoinCoreApi};
use log::info;
use runtime::pallets::btc_relay::H256Le;
use runtime::{PolkaBtcProvider, ReplacePallet};
use sp_core::H256;
use std::convert::TryInto;
use std::time::Duration;

/// Request redeem of PolkaBTC
pub async fn request_replace(
    replace_prov: &PolkaBtcProvider,
    amount: u128,
    griefing_collateral: u128,
) -> Result<H256, Error> {
    let replace_id = replace_prov
        .request_replace(amount, griefing_collateral)
        .await?;

    info!(
        "Requested {:?} to replace {:?} PolkaBTC",
        replace_prov.get_account_id(),
        amount,
    );

    Ok(replace_id)
}

pub async fn accept_replace(
    replace_prov: &PolkaBtcProvider,
    replace_id: H256,
    collateral: u128,
) -> Result<(), Error> {
    info!("Collateral: {}", collateral);

    replace_prov.accept_replace(replace_id, collateral).await?;
    Ok(())
}

pub async fn execute_replace(
    replace_prov: &PolkaBtcProvider,
    btc_rpc: &BitcoinCore,
    replace_id: H256,
) -> Result<(), Error> {
    let replace_request = replace_prov.get_replace_request(replace_id).await?;
    let btc_address =
        bitcoin::hash_to_p2wpkh(replace_request.btc_address, bitcoin::Network::Regtest)?;

    println!("Satoshis: {}", replace_request.amount);

    let tx_metadata = btc_rpc
        .send_to_address(
            btc_address,
            replace_request.amount.try_into().unwrap(),
            &replace_id.to_fixed_bytes(),
            Duration::from_secs(15 * 60),
            1,
        )
        .await?;

    utils::wait_for_block_in_relay(replace_prov, tx_metadata.block_hash).await;

    replace_prov
        .execute_replace(
            replace_id,
            H256Le::from_bytes_le(tx_metadata.txid.as_ref()),
            tx_metadata.block_height,
            tx_metadata.proof,
            tx_metadata.raw_tx,
        )
        .await?;

    Ok(())
}