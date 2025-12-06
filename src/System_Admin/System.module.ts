import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Systemservice } from "./System.service";
import { SystemController } from "./System.controller";
import { Login,UserSchema } from "src/User.schema";
import { studentService } from "src/Student/Student.service";
import { ClubService } from "src/Club_Admin/Club.service";
import { StudentController } from "src/Student/Student.controller";
import { ClubController } from "src/Club_Admin/Club.controller";
import { Events, EventSchema } from "src/Events.schema";
import { Enroll ,PartSchema} from "src/Participate.schema";

@Module({
    imports:[
        MongooseModule.forFeature([
            {name:Login.name,schema:UserSchema},
            {name:Events.name,schema:EventSchema},
            {name:Enroll.name,schema:PartSchema}
        ]),
    ],
    providers:[Systemservice,studentService,ClubService],
    controllers:[SystemController,StudentController,ClubController],
    exports:[Systemservice]
})
export class SystemModule{};