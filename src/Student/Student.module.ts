import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Login, UserSchema } from "src/User.schema";
import { StudentController } from "./Student.controller";
import { studentService } from "./Student.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name ,schema:UserSchema}])
    ],
    providers:[studentService],
    controllers:[StudentController],
    exports:[studentService]
})

export class StudentModule{};