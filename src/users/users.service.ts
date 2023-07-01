import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';



@Injectable()
export class UsersService {
    constructor( @InjectRepository(User) private useRepository: Repository<User> ){}

    async creteUser(user:CreateUserDto){
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
            }
        })
        if(!userFound){
            return new HttpException('user not found', HttpStatus.NOT_FOUND)
        }
        return userFound
    }
}
