import { Controller ,Post,Get, Body, Delete,Param} from "@nestjs/common";
import { studentService } from "./Student.service";
import { User } from "src/User.dto";


@Controller('student')
export class StudentController{
    constructor(private readonly student:studentService){}

    @Post()
    async create(@Body() dto:User):Promise <User>{
        return this.student.addStudent(dto);
    }
    @Delete('/:id')
    async delete(@Body('id') id:string):Promise<any>{
        return this.student.removeStudent(id);
    }

    @Get('findAll')
    async findAll():Promise<User[]>{
        return this.student.findAll();
    }

    @Get('find/:id')
    async find(@Param('id') id:string):Promise<User |any>{
        return this.student.find(id);
    }
}