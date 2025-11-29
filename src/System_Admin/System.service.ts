import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Control } from "./System.schema";
import { Model } from "mongoose";
import { SystemDTO } from "./System.dto";
// import {}
@Injectable()
export class Systemservice{
    constructor(@InjectModel(Control.name) private SystemModel:Model<Control>){}

    async Create_Event(@Body() dto:SystemDTO):Promise<SystemDTO>{
        const event=new this.SystemModel(dto);
        return event;
    }

    async Delete_Event(Eventid:string){
        return this.SystemModel.findByIdAndDelete(Eventid);
    }

    async Delete_Event_sel(filter:any){
        return this.SystemModel.deleteMany(filter);
    }

    async List_Events():Promise <Control[]>{
        return this.SystemModel.find().exec();
    }
}