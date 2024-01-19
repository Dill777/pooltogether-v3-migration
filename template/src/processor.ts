import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
        chain: 'https://my.eth-mainnet.rpc',
    })
    .setFinalityConfirmation(10)
    .setFields({
        
    })
    .addLog({
        address: ['0x2E645469f354BB4F5c8a05B3b30A929361cf77eC']
    })
