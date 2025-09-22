import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/User'; // adapte le chemin

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv1047.hstgr.io',
      port: 3306,
      username: 'u693597802_P',
      password: '6bp#da4q##GNX.w',
      database: 'u693597802_youtubelikeP',
      entities: [User],
      synchronize: false,
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
