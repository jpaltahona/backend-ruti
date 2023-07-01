import { Controller, Post, Body } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {

    constructor(
        private routeService: RoutesService
    ){}
    @Post()
    createRoute(@Body() newRoute){
        return this.routeService.creteRoute(newRoute)
    }
}
