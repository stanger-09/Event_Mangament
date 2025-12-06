import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventSchema ,Events} from "src/Events.schema";
import { EventDTO } from "src/EventsDTO.dto";

@Injectable()
export class ClubService{
    constructor(
        @InjectModel(Events.name) private EventModel:Model<EventDTO>
    ){}

    //creating an event based on the json.
    async create_Event(dto:EventDTO):Promise<EventDTO>{
        const event=new this.EventModel(dto);
        console.log(event);
        return event.save();
    }

    //add the students to the events.

    //display all events.
    async list_Events():Promise<EventDTO[]>{
        return this.EventModel.find().exec();
    }

    //finding an event based on the name.
    async find_Event(@Body() title:string):Promise<EventDTO | null>{
        return this.EventModel.findOne({event_name:title}).exec();
    }

    //remove the event based on the name.
    async remove_Event(@Body() title:string):Promise<EventDTO | any>{
        return this.EventModel.deleteOne({event_name:title});
    }
}