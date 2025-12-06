import { Module } from '@nestjs/common';
import { ClubController } from './Club.controller';
import { ClubService } from './Club.service';
import { MongooseModule} from '@nestjs/mongoose';
import { EventSchema ,Events} from 'src/Events.schema';
import { Login, UserSchema } from 'src/User.schema';
@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
        MongooseModule.forFeature([{name:Events.name,schema:EventSchema}]),
    ],
  controllers: [ClubController],
  providers:[ClubService],
  exports:[ClubService]

})
export class ClubModule {}
