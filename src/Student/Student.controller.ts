import { Controller ,Post,Get, Body, Delete,Param, UseGuards} from "@nestjs/common";
import { studentService } from "./Student.service";
import { User } from "src/User.dto";
import { Role } from "src/role.enum";
import { Roles } from "src/roles.decorator";
import { AuthGuard } from "src/Auth/Auth.guard";
// import {JwtAuth}

@Controller('student')
export class StudentController{
    constructor(private readonly student:studentService){}


    @Post()
    
    async create(@Body() dto:User):Promise <User>{
        return this.student.addStudent(dto);
    }
    @Delete('/:id')
    async delete(@Param('id') id:string):Promise<any>{
        return this.student.removeStudent(id);
    }

    @UseGuards(AuthGuard)
    @Roles(Role.Student)
    @Get('findAll')
    // @Roles(Role.Student)
    async findAll():Promise<User[]>{
        return this.student.findAll();
    }

    @Get('find/:id')
    async find(@Param('id') id:string):Promise<User |any>{
        return this.student.find(id);
    }
}