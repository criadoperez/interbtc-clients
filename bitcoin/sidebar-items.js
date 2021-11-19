initSidebarItems({"constant":[["BLOCK_INTERVAL","Average time to mine a Bitcoin block."],["PUBLIC_KEY_SIZE","The size (in bytes) of a serialized public key."]],"enum":[["AddressType","Used to represent an address type."],["Auth","The different authentication methods for the client."],["BitcoinError","The error type for errors produced in this library."],["BitcoinRpcError",""],["ConversionError",""],["Error",""],["JsonRpcError","A library error"],["Network","The cryptocurrency to act on"],["Payload","The method used to produce an address"]],"fn":[["deserialize","Deserialize an object from a vector, will error if said deserialization doesn’t consume the entire vector."],["reverse_stream_transactions","Stream over transactions, starting with this in the mempool and continuing with transactions from previous in-chain block. The stream ends after the block at `stop_height` has been returned."],["serialize","Encode an object into a vector"],["stream_blocks","Stream blocks continuously `from_height` awaiting the production of new blocks as reported by Bitcoin core. The stream never ends."],["stream_in_chain_transactions","Stream all transactions in blocks produced by Bitcoin Core."]],"mod":[["cli",""],["key","Bitcoin Keys"],["opcodes","Constants associated with All type"]],"struct":[["Address","A Bitcoin address"],["Amount","Amount"],["BitcoinCore",""],["Block","A Bitcoin block, which is a collection of transactions with an attached proof of work."],["BlockHash","A bitcoin block hash."],["BlockHeader","A block header, which contains all the block’s information except the actual transactions"],["Builder","An object which can be used to construct a script piece by piece"],["Client","Client implements a JSON-RPC client for the Bitcoin Core daemon or compatible APIs."],["CreateRawTransactionInput",""],["GetBlockResult",""],["GetTransactionResult",""],["LockedTransaction",""],["OutPoint","A reference to a transaction output"],["PartialMerkleTree","Data structure that represents a partial merkle tree."],["PrivateKey","A Bitcoin ECDSA private key"],["PubkeyHash","A hash of a public key."],["PublicKey","A Bitcoin ECDSA public key"],["RpcError","A JSONRPC error object"],["Script","A Bitcoin script"],["ScriptHash","A hash of Bitcoin Script bytecode."],["SecretKey","Secret 256-bit key used as `x` in an ECDSA signature"],["Transaction","A Bitcoin transaction, which describes an authenticated movement of coins."],["TransactionMetadata",""],["TxIn","A transaction input, which defines old coins to be consumed"],["TxMerkleNode","A hash of the Merkle tree branch or root for transactions"],["TxOut","A transaction output, which defines new coins to be created from old ones."],["Txid","A bitcoin transaction hash/transaction ID."],["Uint256","Little-endian large integer type"],["WPubkeyHash","SegWit version of a public key hash."],["WScriptHash","SegWit version of a Bitcoin Script bytecode hash."],["WalletTxInfo",""]],"trait":[["BitcoinCoreApi",""],["Hash","Trait which applies to hashes of all types"],["PartialAddress",""],["RpcApi",""],["Serialize","A trait for serializing a value as raw data for insertion into PSBT key-value pairs."],["ToHex","Trait for objects that can be serialized as hex strings"],["TransactionExt","Extension trait for transaction, adding methods to help to match the Transaction to Replace/Redeem requests"]]});