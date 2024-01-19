// Path: src/handlers/awardedExternalErc721NftHandler.ts

import { EventContext, StoreContext } from '@subsquid/hydra-common';
import { AwardedExternalErc721Nft } from '../model/AwardedExternalErc721Nft';
import { Prize } from '../model/Prize';
import { ethers } from 'ethers';

class EventName extends ethers.Interface {
    constructor() {
        super(['event EventName(address indexed address, uint256 indexed id, uint256 prize, address winner)']);
    }
}

export async function awardedExternalErc721NftHandler(
    ctx: EventContext & StoreContext
): Promise<void> {
    const awardedExternalErc721Nft = new AwardedExternalErc721Nft();

    // Fill the entity fields with event data
    awardedExternalErc721Nft.id = ctx.event.params.find(param => param.name === 'id')?.value.toString() || '';
    awardedExternalErc721Nft.address = ctx.event.params.find(param => param.name === 'address')?.value.toString() || '';
    let tokenIdsParam = ctx.event.params.find(param => param.name === 'tokenIds');
    awardedExternalErc721Nft.tokenIds = Array.isArray(tokenIdsParam?.value) ? tokenIdsParam.value as string[] : [];
    let prizeParam = ctx.event.params.find(param => param.name === 'prize')?.value;
    if (prizeParam && typeof prizeParam === 'string') {
        let prize = await ctx.store.get(Prize, { where: { id: prizeParam } });
        if (prize) {
            awardedExternalErc721Nft.prize = prize;
        } else {
            awardedExternalErc721Nft.prize = new Prize(); // default value
        }
    } else {
        awardedExternalErc721Nft.prize = new Prize(); // default value
    }
    let winnerParam = ctx.event.params.find(param => param.name === 'winner')?.value;
    if (winnerParam && typeof winnerParam === 'string') {
        awardedExternalErc721Nft.winner = Buffer.from(winnerParam);
    } else {
        awardedExternalErc721Nft.winner = Buffer.alloc(0); // default value
    }

    // Save the entity to the store
    await ctx.store.save(awardedExternalErc721Nft);
}

const mockEventContext: EventContext = {
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
    }
};