import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    createUser(@Body() newUser: CreateUserDto) {
      return this.userService.creteUser(newUser)
    }

    @Get()
    getUsers():Promise<User[]> {
        return this.userService.getUsers()
    }
    @Get(':id')
    getUser( @Param('id', ParseIntPipe) id:number){
        return this.userService.getUser(id)
    }
    @Post('/favorite/:id')
    addFavoriteRoute( @Param('id', ParseIntPipe) id:number, @Body() routeFav){
        const addFav = this.userService.updateUserWithRoutes(id, routeFav)
        return this.userService.getUser(id)
    }
}
