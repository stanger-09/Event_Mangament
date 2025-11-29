import { BadRequestException, Body, Injectable } from "@nestjs/common";
import type { User } from "src/User.schema";
import { ClubService } from "src/Club_Admin/Club.service";
import { Systemservice } from "src/System_Admin/System.service";
import { studentService } from "src/Student/Student.service";

@Injectable()
export class aclservice{
    constructor(
        private readonly studentService:studentService,
        private readonly eventService:ClubService,
        private readonly superService:Systemservice,

    ){}

    UserHandel(@Body() dto:User){
        console.log(dto.role);
        switch(dto.role){
            
            case 'Student': return this.studentService.create(dto);
            case 'SuperAdmin':return this.superService.create(dto);
            case 'Events' :return this.eventService.create(dto);

            default:
                 throw new BadRequestException('Invalid role');
        }
    }
}