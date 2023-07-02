import { Route } from 'src/routes/route.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'



@Entity({ name: 'app' })
export class App {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pasaje: string

    @Column()
    isUpdate: boolean

}