import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { HttpModule } from '@nestjs/axios';
import { GatewayService } from './gateway.service';

@Module({
    imports: [HttpModule],
    providers: [MyGateway, GatewayService]
})
export class GatewayModule {}
