import { BadRequestException, Body, Injectable } from "@nestjs/common";
import type { User } from "src/User.schema";
import { ClubService } from "src/Club_Admin/Club.service";
import { Systemservice } from "src/System_Admin/System.service";
import { studentService } from "src/Student/Student.service";
import { EventDTO } from "src/EventsDTO.dto";

@Injectable()
export class aclservice{
    constructor(
        private readonly studentService:studentService,
        private readonly eventService:ClubService,
        private readonly superService:Systemservice,

    ){}

    UserHandel(@Body() userdto:User,@Body() eventdto:EventDTO){
        console.log(userdto.role);
        switch(userdto.role){
            
            case 'Student': return this.studentService.addStudent(userdto);
            case 'SuperAdmin':return this.superService.create(userdto);
            case 'Events' :return this.eventService.create_Event(eventdto);

            default:
                 throw new BadRequestException('Invalid role');
        }
    }
}