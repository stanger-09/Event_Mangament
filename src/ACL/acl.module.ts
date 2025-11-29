import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema ,Login} from "src/User.schema";
import { User } from "src/User.dto";
import { ClubModule } from "src/Club_Admin/Club.module";
import { SystemModule } from "src/System_Admin/System.module";
import { aclController } from "./acl.controller";
import { aclservice } from "./acl.service";
import { StudentModule } from "src/Student/Student.module";


function roleBase(person:User){
    if(person.role==='Student')
        return 
    else if (person.role==='Super_Admin')
        return
    else if (person.role==='Admin')
        return
    else if (person.role==='Event')
        return 
}

@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name ,schema:UserSchema}]),
        ClubModule,
        SystemModule,
        StudentModule
    ],
    providers:[aclservice],
    controllers:[aclController]
})
export class alcModule{}