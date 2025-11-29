import { Controller ,Post ,Get, Body  } from "@nestjs/common";
import { Systemservice } from "./System.service";
import { SystemDTO } from "./System.dto";
import { Control } from "./System.schema";


@Controller('Admin')
export class SystemController{
    constructor(private readonly srevice:Systemservice){}
    
    @Post()
    async create(@Body() dto:SystemDTO){
        return this.srevice.Create_Event(dto);
    }

    @Get()
    async list_Events():Promise <Control[]>{
        return this.srevice.List_Events();
    }
}