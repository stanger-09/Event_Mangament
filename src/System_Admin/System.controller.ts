import { Controller ,Post ,Get, Body, Delete, Param, Put, Patch  } from "@nestjs/common";
import { Systemservice } from "./System.service";
import { User } from "src/User.dto";
import { Login } from "src/User.schema";
import { studentService } from "src/Student/Student.service";
import { ClubService } from "src/Club_Admin/Club.service";
import { EventDTO } from "src/EventsDTO.dto";
// import { SystemDTO } from "./System.dto";
// import { Control } from "./System.schema";


@Controller('Admin')
export class SystemController{
    constructor(
        private readonly System:Systemservice,
        private readonly Student:studentService,
        private readonly club:ClubService
    ){}

    @Post('Event/create')
    async createEvent(@Body() eventdto:EventDTO):Promise<EventDTO>{
        return this.club.create_Event(eventdto);
    }

    @Delete('Event/delete/:name')
    async deleteEvent(@Param('name') name:string){
        return this.club.remove_Event(name);
    }

    @Post('student/add')
    async addstu(@Body() studentdto:User){
        return this.Student.addStudent(studentdto);
    }

    @Delete('student/delete/:id')
    async deleteStu(@Param('id') id:string){
        return this.Student.removeStudent(id);
    }

    @Patch('student/:id')
    async Paswordchange(@Param('id') id:string,@Body('Password') pas:string){
        return this.System.Stchange(id,pas);
    }

    @Patch('club/:name')
    async Passwordchange(@Param('name')name:string,@Body('status')status:string){
        return this.System.Ptchange(name,status);
    }
}