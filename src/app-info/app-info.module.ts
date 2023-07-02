import { Module } from '@nestjs/common';
import { AppInfoController } from './app-info.controller';
import { AppInfoService } from './app-info.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { App } from './app.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([App])
  ],
  controllers: [AppInfoController],
  providers: [AppInfoService]
})
export class AppInfoModule {}
