import { Injectable, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'


@Injectable()
export class GatewayService {
    constructor(
        private readonly httpService: HttpService
    ){}

    async getInfoVehicle(id){

        const response = await this.httpService.get(`http://181.49.177.91:8086/if/rs/pasto/loc/${id}`).toPromise();
        const res =  await response.data
        return res
    }
}
