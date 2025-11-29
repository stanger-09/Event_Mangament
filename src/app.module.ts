import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ClubModule } from './Club_Admin/Club.module';
import { SystemModule } from './System_Admin/System.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    ClubModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
