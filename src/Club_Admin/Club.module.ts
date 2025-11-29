import { Module } from '@nestjs/common';
import { ClubController } from './Club.controller';
import { ClubService } from './Club.service';
import { MongooseModule} from '@nestjs/mongoose';
import {EventSchema ,Event} from './Club.schema';

@Module({
    imports:[
        MongooseModule.forFeature([{name:Event.name,schema:EventSchema}]),
    ],
  controllers: [ClubController],
  providers:[ClubService],

})
export class ClubModule {}
