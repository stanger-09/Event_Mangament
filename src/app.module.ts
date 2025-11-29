import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { alcModule } from './ACL/acl.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    alcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
