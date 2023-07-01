import { Route } from 'src/routes/route.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'



@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date

    @Column({ nullable: true })
    routerId: number;

    @OneToMany( () => Route, route => route.users)
    ruta: Route[]

}