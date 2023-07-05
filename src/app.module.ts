import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { RoutesModule } from './routes/routes.module';
import { GatewayModule } from './gateway/gateway.module';
import { AppInfoModule } from './app-info/app-info.module';
import { config, configDev } from './config';
const devMode = true;
const configTipe = devMode ? configDev : config;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: configTipe.DB_USER,
      password: configTipe.DB_PASSWORD,
      database: configTipe.PRODUCTION_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    RoutesModule,
    GatewayModule,
    AppInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
