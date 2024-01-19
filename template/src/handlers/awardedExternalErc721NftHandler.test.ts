
describe('awardedExternalErc721NftHandler', () => {
    it('should handle the awardedExternalErc721Nft event', async () => {
        // Mock the event context
        const mockEventContext = {
            event: {
                name: 'EventName',
                method: 'Method',
                indexInBlock: 0,
                id: '1',
                blockNumber: 1,
                blockTimestamp: Date.now(),
                params: [
                    { name: 'id', value: '1', type: 'string' },
                    { name: 'address', value: '0x1234', type: 'string' },
                    { name: 'tokenIds', value: ['1', '2', '3'], type: 'string[]' },
                    { name: 'prize', value: '1', type: 'string' },
                    { name: 'winner', value: '0x5678', type: 'string' },
                ],
            },
            block: {
                id: '1',
                parentHash: '0x1234',
                extrinsicsRoot: '0x1234',
                stateRoot: '0x1234',
                height: 1,
                hash: '0x1234',
                timestamp: Date.now(),
                runtimeVersion: {},
                lastRuntimeUpgrade: {},
                events: [],
                extrinsics: [],
            },
            extrinsic: {
                hash: '0x1234',
                method: 'Method',
                section: 'Section',
                versionInfo: '0x01',
                meta: {},
                args: [],
                id: '1',
                signer: '0x1234',
                tip: BigInt(0),
                indexInBlock: 0,
            },
        };

        // Call the event handler
        await awardedExternalErc721NftHandler(mockEventContext);

        // Add your assertions here
        // For example, you can check if the handler performs the expected actions or updates the necessary models.
    });
});
import { awardedExternalErc721NftHandler } from './awardedExternalErc721NftHandler';
