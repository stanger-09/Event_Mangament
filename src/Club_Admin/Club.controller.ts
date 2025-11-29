import { Controller ,Post,Get, Body} from "@nestjs/common";
import { ClubService } from "./Club.service";
import { EventDTO } from "./Club.dto";

@Controller()
export class ClubController{
    constructor (private readonly clubservice:ClubService){}

    

    @Post()
    async createEvent(@Body() dto:EventDTO ):Promise <EventDTO>{
        console.log(dto.EventId,dto.EventName);
        return this.clubservice.createEvent(dto);
    }

    @Get('find')
    async getEvents():Promise <EventDTO[]>{
        return this.clubservice.EventFindAll();
    }
}