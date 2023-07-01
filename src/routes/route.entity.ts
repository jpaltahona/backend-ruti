
import { User } from 'src/users/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'


@Entity({ name: 'routes' })
export class Route {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    JRNYPATTRN_ID: string

    @Column()
    ROUT_NM: string

    @Column()
    JRNYPATTRN_NM: string

    @Column()
    DISP_STOPPOINT_ID: string

    @Column()
    STOPPOINT_NM: string

    @Column()
    STOPPOINT_ID: string

    @Column()
    ADDR: string

    @Column()
    X_COORD: string

    @Column()
    Y_COORD: string

    @ManyToOne(() => User, user => user.routerId)
    users: User;

}