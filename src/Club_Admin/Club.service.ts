import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event} from './Club.schema'
import { EventDTO } from "./Club.dto"; 


@Injectable()
export class ClubService{
    constructor(@InjectModel(Event.name) private ClubModel:Model<Event>){}

    async createEvent(dto:EventDTO):Promise <Event>{
        const event =new this.ClubModel(dto)
        return event.save();
    }


    async EventFindAll():Promise<EventDTO[]>{
        return this.ClubModel.find().exec()
    }

    // async deleteEvent()
}