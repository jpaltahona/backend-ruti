import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './app.entity';


@Injectable()
export class AppInfoService {
    constructor(
        @InjectRepository(App)
        private appRespository: Repository<App>
    ){}

    getAppInfo(){
       return this.appRespository.find()
    }
}
