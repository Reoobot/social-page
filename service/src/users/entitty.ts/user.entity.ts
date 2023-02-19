
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    gmail:string

    @Column()
    password:string

    @Column({type:'datetime', default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date

    @Column({nullable:true})
    authStrategy:string
    affected: number

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile

    



}