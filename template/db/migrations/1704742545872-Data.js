module.exports = class Data1704742545872 {
    name = 'Data1704742545872'

    async up(db) {
        await db.query(`CREATE TABLE "entity" ("id" character varying NOT NULL, CONSTRAINT "PK_50a7741b415bc585fcf9c984332" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "entity"`)
    }
}
