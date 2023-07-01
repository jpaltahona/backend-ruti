import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Route } from './route.entity';
import { InjectRepository } from '@nestjs/typeorm';
Route
@Injectable()
export class RoutesService {
    constructor(
        @InjectRepository(Route)
        private rutaRepository: Repository<Route>,
    ){}
    async creteRoute(routeData){
        const route = this.rutaRepository.create(routeData)
        return  this.rutaRepository.save(route);
    }
}
