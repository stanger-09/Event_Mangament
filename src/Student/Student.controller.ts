import { Controller ,Post,Get, Body} from "@nestjs/common";
import { studentService } from "./Student.service";
import { User } from "src/User.dto";

@Controller()
export class StudentController{
    constructor(private readonly student:studentService){}

    @Post()
    async create(@Body() dto:User):Promise <User>{
        return this.student.create(dto);
    }
}