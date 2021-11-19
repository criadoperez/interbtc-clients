(function() {var implementors = {};
implementors["runtime"] = [{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.ExtrinsicSuccess.html\" title=\"struct runtime::metadata::system::events::ExtrinsicSuccess\">ExtrinsicSuccess</a>","synthetic":false,"types":["runtime::metadata::system::events::ExtrinsicSuccess"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.ExtrinsicFailed.html\" title=\"struct runtime::metadata::system::events::ExtrinsicFailed\">ExtrinsicFailed</a>","synthetic":false,"types":["runtime::metadata::system::events::ExtrinsicFailed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.CodeUpdated.html\" title=\"struct runtime::metadata::system::events::CodeUpdated\">CodeUpdated</a>","synthetic":false,"types":["runtime::metadata::system::events::CodeUpdated"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.NewAccount.html\" title=\"struct runtime::metadata::system::events::NewAccount\">NewAccount</a>","synthetic":false,"types":["runtime::metadata::system::events::NewAccount"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.KilledAccount.html\" title=\"struct runtime::metadata::system::events::KilledAccount\">KilledAccount</a>","synthetic":false,"types":["runtime::metadata::system::events::KilledAccount"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/system/events/struct.Remarked.html\" title=\"struct runtime::metadata::system::events::Remarked\">Remarked</a>","synthetic":false,"types":["runtime::metadata::system::events::Remarked"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/sudo/events/struct.Sudid.html\" title=\"struct runtime::metadata::sudo::events::Sudid\">Sudid</a>","synthetic":false,"types":["runtime::metadata::sudo::events::Sudid"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/sudo/events/struct.KeyChanged.html\" title=\"struct runtime::metadata::sudo::events::KeyChanged\">KeyChanged</a>","synthetic":false,"types":["runtime::metadata::sudo::events::KeyChanged"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/sudo/events/struct.SudoAsDone.html\" title=\"struct runtime::metadata::sudo::events::SudoAsDone\">SudoAsDone</a>","synthetic":false,"types":["runtime::metadata::sudo::events::SudoAsDone"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/utility/events/struct.BatchInterrupted.html\" title=\"struct runtime::metadata::utility::events::BatchInterrupted\">BatchInterrupted</a>","synthetic":false,"types":["runtime::metadata::utility::events::BatchInterrupted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/utility/events/struct.BatchCompleted.html\" title=\"struct runtime::metadata::utility::events::BatchCompleted\">BatchCompleted</a>","synthetic":false,"types":["runtime::metadata::utility::events::BatchCompleted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/utility/events/struct.ItemCompleted.html\" title=\"struct runtime::metadata::utility::events::ItemCompleted\">ItemCompleted</a>","synthetic":false,"types":["runtime::metadata::utility::events::ItemCompleted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/scheduler/events/struct.Scheduled.html\" title=\"struct runtime::metadata::scheduler::events::Scheduled\">Scheduled</a>","synthetic":false,"types":["runtime::metadata::scheduler::events::Scheduled"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/scheduler/events/struct.Canceled.html\" title=\"struct runtime::metadata::scheduler::events::Canceled\">Canceled</a>","synthetic":false,"types":["runtime::metadata::scheduler::events::Canceled"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/scheduler/events/struct.Dispatched.html\" title=\"struct runtime::metadata::scheduler::events::Dispatched\">Dispatched</a>","synthetic":false,"types":["runtime::metadata::scheduler::events::Dispatched"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.Endowed.html\" title=\"struct runtime::metadata::tokens::events::Endowed\">Endowed</a>","synthetic":false,"types":["runtime::metadata::tokens::events::Endowed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.DustLost.html\" title=\"struct runtime::metadata::tokens::events::DustLost\">DustLost</a>","synthetic":false,"types":["runtime::metadata::tokens::events::DustLost"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.Transfer.html\" title=\"struct runtime::metadata::tokens::events::Transfer\">Transfer</a>","synthetic":false,"types":["runtime::metadata::tokens::events::Transfer"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.Reserved.html\" title=\"struct runtime::metadata::tokens::events::Reserved\">Reserved</a>","synthetic":false,"types":["runtime::metadata::tokens::events::Reserved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.Unreserved.html\" title=\"struct runtime::metadata::tokens::events::Unreserved\">Unreserved</a>","synthetic":false,"types":["runtime::metadata::tokens::events::Unreserved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/tokens/events/struct.BalanceSet.html\" title=\"struct runtime::metadata::tokens::events::BalanceSet\">BalanceSet</a>","synthetic":false,"types":["runtime::metadata::tokens::events::BalanceSet"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/rewards/events/struct.DepositStake.html\" title=\"struct runtime::metadata::rewards::events::DepositStake\">DepositStake</a>","synthetic":false,"types":["runtime::metadata::rewards::events::DepositStake"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/rewards/events/struct.DistributeReward.html\" title=\"struct runtime::metadata::rewards::events::DistributeReward\">DistributeReward</a>","synthetic":false,"types":["runtime::metadata::rewards::events::DistributeReward"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/rewards/events/struct.WithdrawStake.html\" title=\"struct runtime::metadata::rewards::events::WithdrawStake\">WithdrawStake</a>","synthetic":false,"types":["runtime::metadata::rewards::events::WithdrawStake"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/rewards/events/struct.WithdrawReward.html\" title=\"struct runtime::metadata::rewards::events::WithdrawReward\">WithdrawReward</a>","synthetic":false,"types":["runtime::metadata::rewards::events::WithdrawReward"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.DepositStake.html\" title=\"struct runtime::metadata::staking::events::DepositStake\">DepositStake</a>","synthetic":false,"types":["runtime::metadata::staking::events::DepositStake"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.DistributeReward.html\" title=\"struct runtime::metadata::staking::events::DistributeReward\">DistributeReward</a>","synthetic":false,"types":["runtime::metadata::staking::events::DistributeReward"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.WithdrawStake.html\" title=\"struct runtime::metadata::staking::events::WithdrawStake\">WithdrawStake</a>","synthetic":false,"types":["runtime::metadata::staking::events::WithdrawStake"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.WithdrawReward.html\" title=\"struct runtime::metadata::staking::events::WithdrawReward\">WithdrawReward</a>","synthetic":false,"types":["runtime::metadata::staking::events::WithdrawReward"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.ForceRefund.html\" title=\"struct runtime::metadata::staking::events::ForceRefund\">ForceRefund</a>","synthetic":false,"types":["runtime::metadata::staking::events::ForceRefund"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/staking/events/struct.IncreaseNonce.html\" title=\"struct runtime::metadata::staking::events::IncreaseNonce\">IncreaseNonce</a>","synthetic":false,"types":["runtime::metadata::staking::events::IncreaseNonce"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/btc_relay/events/struct.Initialized.html\" title=\"struct runtime::metadata::btc_relay::events::Initialized\">Initialized</a>","synthetic":false,"types":["runtime::metadata::btc_relay::events::Initialized"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/btc_relay/events/struct.StoreMainChainHeader.html\" title=\"struct runtime::metadata::btc_relay::events::StoreMainChainHeader\">StoreMainChainHeader</a>","synthetic":false,"types":["runtime::metadata::btc_relay::events::StoreMainChainHeader"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/btc_relay/events/struct.StoreForkHeader.html\" title=\"struct runtime::metadata::btc_relay::events::StoreForkHeader\">StoreForkHeader</a>","synthetic":false,"types":["runtime::metadata::btc_relay::events::StoreForkHeader"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/btc_relay/events/struct.ChainReorg.html\" title=\"struct runtime::metadata::btc_relay::events::ChainReorg\">ChainReorg</a>","synthetic":false,"types":["runtime::metadata::btc_relay::events::ChainReorg"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/btc_relay/events/struct.ForkAheadOfMainChain.html\" title=\"struct runtime::metadata::btc_relay::events::ForkAheadOfMainChain\">ForkAheadOfMainChain</a>","synthetic":false,"types":["runtime::metadata::btc_relay::events::ForkAheadOfMainChain"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/security/events/struct.RecoverFromErrors.html\" title=\"struct runtime::metadata::security::events::RecoverFromErrors\">RecoverFromErrors</a>","synthetic":false,"types":["runtime::metadata::security::events::RecoverFromErrors"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/security/events/struct.UpdateActiveBlock.html\" title=\"struct runtime::metadata::security::events::UpdateActiveBlock\">UpdateActiveBlock</a>","synthetic":false,"types":["runtime::metadata::security::events::UpdateActiveBlock"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/relay/events/struct.VaultTheft.html\" title=\"struct runtime::metadata::relay::events::VaultTheft\">VaultTheft</a>","synthetic":false,"types":["runtime::metadata::relay::events::VaultTheft"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/relay/events/struct.VaultDoublePayment.html\" title=\"struct runtime::metadata::relay::events::VaultDoublePayment\">VaultDoublePayment</a>","synthetic":false,"types":["runtime::metadata::relay::events::VaultDoublePayment"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RegisterVault.html\" title=\"struct runtime::metadata::vault_registry::events::RegisterVault\">RegisterVault</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RegisterVault"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.DepositCollateral.html\" title=\"struct runtime::metadata::vault_registry::events::DepositCollateral\">DepositCollateral</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::DepositCollateral"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.WithdrawCollateral.html\" title=\"struct runtime::metadata::vault_registry::events::WithdrawCollateral\">WithdrawCollateral</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::WithdrawCollateral"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.UpdatePublicKey.html\" title=\"struct runtime::metadata::vault_registry::events::UpdatePublicKey\">UpdatePublicKey</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::UpdatePublicKey"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RegisterAddress.html\" title=\"struct runtime::metadata::vault_registry::events::RegisterAddress\">RegisterAddress</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RegisterAddress"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.IncreaseToBeIssuedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::IncreaseToBeIssuedTokens\">IncreaseToBeIssuedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::IncreaseToBeIssuedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.DecreaseToBeIssuedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::DecreaseToBeIssuedTokens\">DecreaseToBeIssuedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::DecreaseToBeIssuedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.IssueTokens.html\" title=\"struct runtime::metadata::vault_registry::events::IssueTokens\">IssueTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::IssueTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.IncreaseToBeRedeemedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::IncreaseToBeRedeemedTokens\">IncreaseToBeRedeemedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::IncreaseToBeRedeemedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.DecreaseToBeRedeemedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::DecreaseToBeRedeemedTokens\">DecreaseToBeRedeemedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::DecreaseToBeRedeemedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.IncreaseToBeReplacedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::IncreaseToBeReplacedTokens\">IncreaseToBeReplacedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::IncreaseToBeReplacedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.DecreaseToBeReplacedTokens.html\" title=\"struct runtime::metadata::vault_registry::events::DecreaseToBeReplacedTokens\">DecreaseToBeReplacedTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::DecreaseToBeReplacedTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.DecreaseTokens.html\" title=\"struct runtime::metadata::vault_registry::events::DecreaseTokens\">DecreaseTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::DecreaseTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RedeemTokens.html\" title=\"struct runtime::metadata::vault_registry::events::RedeemTokens\">RedeemTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RedeemTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RedeemTokensPremium.html\" title=\"struct runtime::metadata::vault_registry::events::RedeemTokensPremium\">RedeemTokensPremium</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RedeemTokensPremium"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RedeemTokensLiquidatedVault.html\" title=\"struct runtime::metadata::vault_registry::events::RedeemTokensLiquidatedVault\">RedeemTokensLiquidatedVault</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RedeemTokensLiquidatedVault"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.RedeemTokensLiquidation.html\" title=\"struct runtime::metadata::vault_registry::events::RedeemTokensLiquidation\">RedeemTokensLiquidation</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::RedeemTokensLiquidation"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.ReplaceTokens.html\" title=\"struct runtime::metadata::vault_registry::events::ReplaceTokens\">ReplaceTokens</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::ReplaceTokens"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.LiquidateVault.html\" title=\"struct runtime::metadata::vault_registry::events::LiquidateVault\">LiquidateVault</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::LiquidateVault"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/vault_registry/events/struct.BanVault.html\" title=\"struct runtime::metadata::vault_registry::events::BanVault\">BanVault</a>","synthetic":false,"types":["runtime::metadata::vault_registry::events::BanVault"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/oracle/events/struct.FeedValues.html\" title=\"struct runtime::metadata::oracle::events::FeedValues\">FeedValues</a>","synthetic":false,"types":["runtime::metadata::oracle::events::FeedValues"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/issue/events/struct.RequestIssue.html\" title=\"struct runtime::metadata::issue::events::RequestIssue\">RequestIssue</a>","synthetic":false,"types":["runtime::metadata::issue::events::RequestIssue"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/issue/events/struct.IssueAmountChange.html\" title=\"struct runtime::metadata::issue::events::IssueAmountChange\">IssueAmountChange</a>","synthetic":false,"types":["runtime::metadata::issue::events::IssueAmountChange"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/issue/events/struct.ExecuteIssue.html\" title=\"struct runtime::metadata::issue::events::ExecuteIssue\">ExecuteIssue</a>","synthetic":false,"types":["runtime::metadata::issue::events::ExecuteIssue"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/issue/events/struct.CancelIssue.html\" title=\"struct runtime::metadata::issue::events::CancelIssue\">CancelIssue</a>","synthetic":false,"types":["runtime::metadata::issue::events::CancelIssue"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/redeem/events/struct.RequestRedeem.html\" title=\"struct runtime::metadata::redeem::events::RequestRedeem\">RequestRedeem</a>","synthetic":false,"types":["runtime::metadata::redeem::events::RequestRedeem"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/redeem/events/struct.LiquidationRedeem.html\" title=\"struct runtime::metadata::redeem::events::LiquidationRedeem\">LiquidationRedeem</a>","synthetic":false,"types":["runtime::metadata::redeem::events::LiquidationRedeem"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/redeem/events/struct.ExecuteRedeem.html\" title=\"struct runtime::metadata::redeem::events::ExecuteRedeem\">ExecuteRedeem</a>","synthetic":false,"types":["runtime::metadata::redeem::events::ExecuteRedeem"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/redeem/events/struct.CancelRedeem.html\" title=\"struct runtime::metadata::redeem::events::CancelRedeem\">CancelRedeem</a>","synthetic":false,"types":["runtime::metadata::redeem::events::CancelRedeem"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/redeem/events/struct.MintTokensForReimbursedRedeem.html\" title=\"struct runtime::metadata::redeem::events::MintTokensForReimbursedRedeem\">MintTokensForReimbursedRedeem</a>","synthetic":false,"types":["runtime::metadata::redeem::events::MintTokensForReimbursedRedeem"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/replace/events/struct.RequestReplace.html\" title=\"struct runtime::metadata::replace::events::RequestReplace\">RequestReplace</a>","synthetic":false,"types":["runtime::metadata::replace::events::RequestReplace"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/replace/events/struct.WithdrawReplace.html\" title=\"struct runtime::metadata::replace::events::WithdrawReplace\">WithdrawReplace</a>","synthetic":false,"types":["runtime::metadata::replace::events::WithdrawReplace"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/replace/events/struct.AcceptReplace.html\" title=\"struct runtime::metadata::replace::events::AcceptReplace\">AcceptReplace</a>","synthetic":false,"types":["runtime::metadata::replace::events::AcceptReplace"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/replace/events/struct.ExecuteReplace.html\" title=\"struct runtime::metadata::replace::events::ExecuteReplace\">ExecuteReplace</a>","synthetic":false,"types":["runtime::metadata::replace::events::ExecuteReplace"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/replace/events/struct.CancelReplace.html\" title=\"struct runtime::metadata::replace::events::CancelReplace\">CancelReplace</a>","synthetic":false,"types":["runtime::metadata::replace::events::CancelReplace"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/refund/events/struct.RequestRefund.html\" title=\"struct runtime::metadata::refund::events::RequestRefund\">RequestRefund</a>","synthetic":false,"types":["runtime::metadata::refund::events::RequestRefund"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/refund/events/struct.ExecuteRefund.html\" title=\"struct runtime::metadata::refund::events::ExecuteRefund\">ExecuteRefund</a>","synthetic":false,"types":["runtime::metadata::refund::events::ExecuteRefund"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/nomination/events/struct.NominationOptIn.html\" title=\"struct runtime::metadata::nomination::events::NominationOptIn\">NominationOptIn</a>","synthetic":false,"types":["runtime::metadata::nomination::events::NominationOptIn"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/nomination/events/struct.NominationOptOut.html\" title=\"struct runtime::metadata::nomination::events::NominationOptOut\">NominationOptOut</a>","synthetic":false,"types":["runtime::metadata::nomination::events::NominationOptOut"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/nomination/events/struct.DepositCollateral.html\" title=\"struct runtime::metadata::nomination::events::DepositCollateral\">DepositCollateral</a>","synthetic":false,"types":["runtime::metadata::nomination::events::DepositCollateral"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/nomination/events/struct.WithdrawCollateral.html\" title=\"struct runtime::metadata::nomination::events::WithdrawCollateral\">WithdrawCollateral</a>","synthetic":false,"types":["runtime::metadata::nomination::events::WithdrawCollateral"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Proposed.html\" title=\"struct runtime::metadata::democracy::events::Proposed\">Proposed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Proposed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Tabled.html\" title=\"struct runtime::metadata::democracy::events::Tabled\">Tabled</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Tabled"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.ExternalTabled.html\" title=\"struct runtime::metadata::democracy::events::ExternalTabled\">ExternalTabled</a>","synthetic":false,"types":["runtime::metadata::democracy::events::ExternalTabled"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Started.html\" title=\"struct runtime::metadata::democracy::events::Started\">Started</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Started"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Passed.html\" title=\"struct runtime::metadata::democracy::events::Passed\">Passed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Passed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.NotPassed.html\" title=\"struct runtime::metadata::democracy::events::NotPassed\">NotPassed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::NotPassed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Cancelled.html\" title=\"struct runtime::metadata::democracy::events::Cancelled\">Cancelled</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Cancelled"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Executed.html\" title=\"struct runtime::metadata::democracy::events::Executed\">Executed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Executed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Delegated.html\" title=\"struct runtime::metadata::democracy::events::Delegated\">Delegated</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Delegated"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Undelegated.html\" title=\"struct runtime::metadata::democracy::events::Undelegated\">Undelegated</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Undelegated"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Vetoed.html\" title=\"struct runtime::metadata::democracy::events::Vetoed\">Vetoed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Vetoed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.PreimageNoted.html\" title=\"struct runtime::metadata::democracy::events::PreimageNoted\">PreimageNoted</a>","synthetic":false,"types":["runtime::metadata::democracy::events::PreimageNoted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.PreimageUsed.html\" title=\"struct runtime::metadata::democracy::events::PreimageUsed\">PreimageUsed</a>","synthetic":false,"types":["runtime::metadata::democracy::events::PreimageUsed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.PreimageInvalid.html\" title=\"struct runtime::metadata::democracy::events::PreimageInvalid\">PreimageInvalid</a>","synthetic":false,"types":["runtime::metadata::democracy::events::PreimageInvalid"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.PreimageMissing.html\" title=\"struct runtime::metadata::democracy::events::PreimageMissing\">PreimageMissing</a>","synthetic":false,"types":["runtime::metadata::democracy::events::PreimageMissing"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.PreimageReaped.html\" title=\"struct runtime::metadata::democracy::events::PreimageReaped\">PreimageReaped</a>","synthetic":false,"types":["runtime::metadata::democracy::events::PreimageReaped"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/democracy/events/struct.Blacklisted.html\" title=\"struct runtime::metadata::democracy::events::Blacklisted\">Blacklisted</a>","synthetic":false,"types":["runtime::metadata::democracy::events::Blacklisted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Proposed.html\" title=\"struct runtime::metadata::council::events::Proposed\">Proposed</a>","synthetic":false,"types":["runtime::metadata::council::events::Proposed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Voted.html\" title=\"struct runtime::metadata::council::events::Voted\">Voted</a>","synthetic":false,"types":["runtime::metadata::council::events::Voted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Approved.html\" title=\"struct runtime::metadata::council::events::Approved\">Approved</a>","synthetic":false,"types":["runtime::metadata::council::events::Approved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Disapproved.html\" title=\"struct runtime::metadata::council::events::Disapproved\">Disapproved</a>","synthetic":false,"types":["runtime::metadata::council::events::Disapproved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Executed.html\" title=\"struct runtime::metadata::council::events::Executed\">Executed</a>","synthetic":false,"types":["runtime::metadata::council::events::Executed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.MemberExecuted.html\" title=\"struct runtime::metadata::council::events::MemberExecuted\">MemberExecuted</a>","synthetic":false,"types":["runtime::metadata::council::events::MemberExecuted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/council/events/struct.Closed.html\" title=\"struct runtime::metadata::council::events::Closed\">Closed</a>","synthetic":false,"types":["runtime::metadata::council::events::Closed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Proposed.html\" title=\"struct runtime::metadata::technical_committee::events::Proposed\">Proposed</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Proposed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Voted.html\" title=\"struct runtime::metadata::technical_committee::events::Voted\">Voted</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Voted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Approved.html\" title=\"struct runtime::metadata::technical_committee::events::Approved\">Approved</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Approved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Disapproved.html\" title=\"struct runtime::metadata::technical_committee::events::Disapproved\">Disapproved</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Disapproved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Executed.html\" title=\"struct runtime::metadata::technical_committee::events::Executed\">Executed</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Executed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.MemberExecuted.html\" title=\"struct runtime::metadata::technical_committee::events::MemberExecuted\">MemberExecuted</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::MemberExecuted"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_committee/events/struct.Closed.html\" title=\"struct runtime::metadata::technical_committee::events::Closed\">Closed</a>","synthetic":false,"types":["runtime::metadata::technical_committee::events::Closed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.MemberAdded.html\" title=\"struct runtime::metadata::technical_membership::events::MemberAdded\">MemberAdded</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::MemberAdded"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.MemberRemoved.html\" title=\"struct runtime::metadata::technical_membership::events::MemberRemoved\">MemberRemoved</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::MemberRemoved"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.MembersSwapped.html\" title=\"struct runtime::metadata::technical_membership::events::MembersSwapped\">MembersSwapped</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::MembersSwapped"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.MembersReset.html\" title=\"struct runtime::metadata::technical_membership::events::MembersReset\">MembersReset</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::MembersReset"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.KeyChanged.html\" title=\"struct runtime::metadata::technical_membership::events::KeyChanged\">KeyChanged</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::KeyChanged"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/technical_membership/events/struct.Dummy.html\" title=\"struct runtime::metadata::technical_membership::events::Dummy\">Dummy</a>","synthetic":false,"types":["runtime::metadata::technical_membership::events::Dummy"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Proposed.html\" title=\"struct runtime::metadata::treasury::events::Proposed\">Proposed</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Proposed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Spending.html\" title=\"struct runtime::metadata::treasury::events::Spending\">Spending</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Spending"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Awarded.html\" title=\"struct runtime::metadata::treasury::events::Awarded\">Awarded</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Awarded"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Rejected.html\" title=\"struct runtime::metadata::treasury::events::Rejected\">Rejected</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Rejected"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Burnt.html\" title=\"struct runtime::metadata::treasury::events::Burnt\">Burnt</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Burnt"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Rollover.html\" title=\"struct runtime::metadata::treasury::events::Rollover\">Rollover</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Rollover"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/treasury/events/struct.Deposit.html\" title=\"struct runtime::metadata::treasury::events::Deposit\">Deposit</a>","synthetic":false,"types":["runtime::metadata::treasury::events::Deposit"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.NewTerm.html\" title=\"struct runtime::metadata::elections_phragmen::events::NewTerm\">NewTerm</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::NewTerm"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.EmptyTerm.html\" title=\"struct runtime::metadata::elections_phragmen::events::EmptyTerm\">EmptyTerm</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::EmptyTerm"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.ElectionError.html\" title=\"struct runtime::metadata::elections_phragmen::events::ElectionError\">ElectionError</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::ElectionError"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.MemberKicked.html\" title=\"struct runtime::metadata::elections_phragmen::events::MemberKicked\">MemberKicked</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::MemberKicked"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.Renounced.html\" title=\"struct runtime::metadata::elections_phragmen::events::Renounced\">Renounced</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::Renounced"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.CandidateSlashed.html\" title=\"struct runtime::metadata::elections_phragmen::events::CandidateSlashed\">CandidateSlashed</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::CandidateSlashed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/elections_phragmen/events/struct.SeatHolderSlashed.html\" title=\"struct runtime::metadata::elections_phragmen::events::SeatHolderSlashed\">SeatHolderSlashed</a>","synthetic":false,"types":["runtime::metadata::elections_phragmen::events::SeatHolderSlashed"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/grandpa/events/struct.NewAuthorities.html\" title=\"struct runtime::metadata::grandpa::events::NewAuthorities\">NewAuthorities</a>","synthetic":false,"types":["runtime::metadata::grandpa::events::NewAuthorities"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/grandpa/events/struct.Paused.html\" title=\"struct runtime::metadata::grandpa::events::Paused\">Paused</a>","synthetic":false,"types":["runtime::metadata::grandpa::events::Paused"]},{"text":"impl Event for <a class=\"struct\" href=\"runtime/metadata/grandpa/events/struct.Resumed.html\" title=\"struct runtime::metadata::grandpa::events::Resumed\">Resumed</a>","synthetic":false,"types":["runtime::metadata::grandpa::events::Resumed"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()