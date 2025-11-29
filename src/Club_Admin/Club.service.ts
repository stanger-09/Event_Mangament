import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserSchema,Login  } from "src/User.schema";
import { User } from "src/User.dto";

// import { Event} from './Club.schema'
// import { EventDTO } from "./Club.dto"; 


@Injectable()
export class ClubService{
    constructor(@InjectModel(Login.name) private ClubModel:Model<Login>){}

    async create(dto:User):Promise <Login>{
        const event =new this.ClubModel(dto)
        return event.save();
    }


    async EventFindAll():Promise<User[]>{
        return this.ClubModel.find().exec()
    }

    // async deleteEvent()
}