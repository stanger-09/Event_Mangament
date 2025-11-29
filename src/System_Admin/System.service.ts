import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
// import { Control } from "./System.schema";
import { Model } from "mongoose";
// import { SystemDTO } from "./System.dto";
import { Login} from "src/User.schema";
import { User } from "src/User.dto";
@Injectable()
export class Systemservice{
    constructor(@InjectModel(Login.name) private SystemModel:Model<Login>){}

    async create(@Body() dto:User):Promise<User>{
        const event=new this.SystemModel(dto);
        return event;
    }

    async Delete_Event(Eventid:string){
        return this.SystemModel.findByIdAndDelete(Eventid);
    }

    async Delete_Event_sel(filter:any){
        return this.SystemModel.deleteMany(filter);
    }

    async List_Events():Promise <Login[]>{
        return this.SystemModel.find().exec();
    }
}