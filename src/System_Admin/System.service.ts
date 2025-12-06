import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
// import { Control } from "./System.schema";
import { Model } from "mongoose";
// import { SystemDTO } from "./System.dto";
import { Login} from "src/User.schema";
import { User } from "src/User.dto";
import { Events } from "src/Events.schema";
import { Enroll } from "src/Participate.schema";
@Injectable()
export class Systemservice{
    constructor(
        @InjectModel(Login.name) private SystemModel:Model<Login>,
        @InjectModel(Events.name) private eventModel:Model<Events>,
        @InjectModel(Enroll.name) private partModel:Model<Enroll>
    ){}

    async create(dto:User){
        return null;
    }
    async Stchange(id:string,pas:string){
        const user=await this.SystemModel.findOne({userid:id});
        if(!user) throw new NotFoundException('User not found!');
        user.password=pas;
        return await user.save();
    }

    async Ptchange(name:string,status:string){
        const event=await this.eventModel.findOne({event_name:name});
        if(!event)throw new NotFoundException('the Event is not found!');
        event.status=status;
        return await event.save();
    }
}