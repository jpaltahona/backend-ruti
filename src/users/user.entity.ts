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

    @Column()
    routes: number;

    @OneToMany( () => Route, route => route.id)
    ruta: Route[]

}