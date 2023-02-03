import {
    Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { Client } from "./client";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ length: 20 })
    tel: string;

    @CreateDateColumn()
    readonly createdAt: Date;

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}