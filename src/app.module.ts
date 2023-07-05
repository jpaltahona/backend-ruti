import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { RoutesModule } from './routes/routes.module';
import { GatewayModule } from './gateway/gateway.module';
import { AppInfoModule } from './app-info/app-info.module';
import { config } from './config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.PRODUCTION_DB,
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
