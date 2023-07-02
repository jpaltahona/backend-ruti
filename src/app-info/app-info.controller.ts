import { Controller, Get } from '@nestjs/common';
import { AppInfoService } from './app-info.service';

@Controller('app-info')
export class AppInfoController {
    constructor(
        private appInfoService: AppInfoService
    ){}
    @Get()
    getInfoApp(){
       return this.appInfoService.getAppInfo()
    }
}
