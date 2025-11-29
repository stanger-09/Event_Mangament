import { Module } from '@nestjs/common';
import { ClubController } from './Club.controller';
import { ClubService } from './Club.service';
import { MongooseModule} from '@nestjs/mongoose';
// import {EventSchema ,Event} from './Club.schema';
import { Login, UserSchema } from 'src/User.schema';
@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
    ],
  controllers: [ClubController],
  providers:[ClubService],
  exports:[ClubService]

})
export class ClubModule {}
