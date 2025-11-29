import { Injectable } from "@nestjs/common";
import { Login ,UserSchema} from "src/User.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/User.dto";
@Injectable()
export class studentService{
    constructor(@InjectModel(Login.name) private student:Model<User>){}

    async create(dto:User){
        const user=new this.student(dto);
        return user.save();
    }
    
}