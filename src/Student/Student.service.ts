import { Injectable ,Body} from "@nestjs/common";
import { Login } from "src/User.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/User.dto";
import { Enroll } from "src/Participate.schema";
import { ParticipateDTO } from "src/ParticipateDTO.dto";
@Injectable()
export class studentService{
    constructor(@InjectModel(Login.name) private student:Model<User>,
        @InjectModel(Enroll.name) private enroll:Model<ParticipateDTO>
    ){}

    // adding the user.
    async addStudent(@Body() dto:User):Promise<User>{
        const user=new this.student(dto);
        return user.save();
    }

    //removing the user.
    async removeStudent(@Body() id:string):Promise<User | any>{
        return this.student.deleteOne({userid:id});
    }

    //find all the users.
    async findAll():Promise <User[]>{
        return this.student.find().exec();
    }

    //find the student by id
    async find(id:string):Promise<User|any>{
        return this.student.find({userid:id});
    }
}