module.exports = class Data1704744601483 {
    name = 'Data1704744601483'

    async up(db) {
        await db.query(`ALTER TABLE "entity" ADD "owner" bytea NOT NULL`)
        await db.query(`ALTER TABLE "entity" ADD "display_name" text NOT NULL`)
        await db.query(`ALTER TABLE "entity" ADD "image_url" text NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "entity" DROP COLUMN "owner"`)
        await db.query(`ALTER TABLE "entity" DROP COLUMN "display_name"`)
        await db.query(`ALTER TABLE "entity" DROP COLUMN "image_url"`)
    }
}
