import { Controller ,Post,Get, Body, Param, Delete} from "@nestjs/common";
import { ClubService } from "./Club.service";
import { EventSchema ,Events} from "src/Events.schema";
import { EventDTO } from "src/EventsDTO.dto";
@Controller('Events')
export class ClubController{
    constructor (private readonly clubservice:ClubService){}

    @Post('add')
    async create(@Body() dto:Events ):Promise <EventDTO>{
        return this.clubservice.create_Event(dto);
    }

    @Get('findAll')
    async getEvents():Promise <EventDTO[]>{
        return this.clubservice.list_Events();
    }

    @Get('find/:title')
    async getEvent(@Param('title') title:string):Promise <EventDTO | null>{
        return this.clubservice.find_Event(title);
    }

    @Delete('remove/:title')
    async removeEvent(@Param('title') title:string):Promise <EventDTO | any>{
        return this.clubservice.remove_Event(title);
    }
}