import {
    Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Timestamp
} from "typeorm";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ length: 20 })
    tel: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(type => Client, {
        eager: true,
    }) @JoinTable()
    contacts: Client[];
}