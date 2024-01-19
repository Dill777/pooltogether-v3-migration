import {Entity, PrimaryColumn, Column, ManyToOne} from "typeorm";
import {Prize} from "./Prize";

@Entity()
export class AwardedExternalErc721Nft {
    @PrimaryColumn()
    id: string = '';

    @Column('bytea')
    address: string = '';

    @Column('simple-array')
    tokenIds: string[] = [];

    @ManyToOne(() => Prize)
    prize: Prize = new Prize();

    @Column('bytea')
    winner: Buffer = Buffer.alloc(0);
}