import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'
import { Repository } from 'typeorm';
import { Route } from 'src/routes/route.entity';



@Injectable()
export class UsersService {
    constructor( 
        @InjectRepository(User)
        private useRepository: Repository<User>,

        @InjectRepository(Route)
        private rutaRepository: Repository<Route>,
        ){}

    async creteUser(user){
        const userFound = await this.useRepository.findOne({
            where: {
                email: user.email 
            }
        })
        if(userFound) {
            return new HttpException('User alredy exit', HttpStatus.CONFLICT)
        } 

        const newUser = this.useRepository.create(user);
        return this.useRepository.save(newUser);
    }

    getUsers(){
      return this.useRepository.find()
    }
    async getUser(id:number){
        const userFound = await this.useRepository.findOne({
            where: {
                id: id
            },
            relations: ['ruta']
        })
        if(!userFound){
            return new HttpException('user not found', HttpStatus.NOT_FOUND)
        }
        return userFound
    }

    async updateUserWithRoutes(userId: number, routeIds){
    
        const user = await this.useRepository.findOne({ 
            where: {
                id: userId
            },
            relations: ['ruta']
        });

        if (!user) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND)
        }

        const routesToAdd = await this.rutaRepository.findOneById(routeIds);
        if(!routesToAdd){
            return new HttpException('route not found', HttpStatus.NOT_FOUND)
        }
       
        user.ruta = [...user.ruta];
        user.ruta.push(routesToAdd);
      
        Object.assign(user, user);
        await this.useRepository.save(user)
        return user;
    }
}
