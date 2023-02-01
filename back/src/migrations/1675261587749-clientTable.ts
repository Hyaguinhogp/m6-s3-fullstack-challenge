import { MigrationInterface, QueryRunner } from "typeorm";

export class clientTable1675261587749 implements MigrationInterface {
    name = 'clientTable1675261587749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "tel" character varying(20) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients_contacts_clients" ("clientsId_1" uuid NOT NULL, "clientsId_2" uuid NOT NULL, CONSTRAINT "PK_124b6277ea957236aab8ffe53b8" PRIMARY KEY ("clientsId_1", "clientsId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9e90d1cac667dd6173d1fdffb5" ON "clients_contacts_clients" ("clientsId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_a68b3a9a871bafbf07c4336207" ON "clients_contacts_clients" ("clientsId_2") `);
        await queryRunner.query(`ALTER TABLE "clients_contacts_clients" ADD CONSTRAINT "FK_9e90d1cac667dd6173d1fdffb50" FOREIGN KEY ("clientsId_1") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "clients_contacts_clients" ADD CONSTRAINT "FK_a68b3a9a871bafbf07c4336207a" FOREIGN KEY ("clientsId_2") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients_contacts_clients" DROP CONSTRAINT "FK_a68b3a9a871bafbf07c4336207a"`);
        await queryRunner.query(`ALTER TABLE "clients_contacts_clients" DROP CONSTRAINT "FK_9e90d1cac667dd6173d1fdffb50"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a68b3a9a871bafbf07c4336207"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9e90d1cac667dd6173d1fdffb5"`);
        await queryRunner.query(`DROP TABLE "clients_contacts_clients"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
