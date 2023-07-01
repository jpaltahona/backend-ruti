import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity';
import { Route } from 'src/routes/route.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Route])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
