import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Login, UserSchema } from "src/User.schema";
import { StudentController } from "./Student.controller";
import { studentService } from "./Student.service";
import { Events,EventSchema} from "src/Events.schema";
import { Enroll ,PartSchema} from "src/Participate.schema";
@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name ,schema:UserSchema}]),
        MongooseModule.forFeature([{name:Enroll.name,schema:PartSchema}]),
    ],
    providers:[studentService],
    controllers:[StudentController],
    exports:[studentService]
})

export class StudentModule{};