import { Controller ,Post ,Get, Body  } from "@nestjs/common";
import { Systemservice } from "./System.service";
import { User } from "src/User.dto";
import { Login } from "src/User.schema";
// import { SystemDTO } from "./System.dto";
// import { Control } from "./System.schema";


@Controller('Admin')
export class SystemController{
    constructor(private readonly srevice:Systemservice){}
    
    @Post()
    async create(@Body() dto:User){
        return this.srevice.create(dto);
    }

    @Get()
    async list_Events():Promise <Login[]>{
        return this.srevice.List_Events();
    }
}