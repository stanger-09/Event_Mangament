import { Controller ,Post,Get, Body} from "@nestjs/common";
import { ClubService } from "./Club.service";
// import { EventDTO } from "./Club.dto";
import { UserSchema,Login  } from "src/User.schema";
import { User } from "src/User.dto";

@Controller()
export class ClubController{
    constructor (private readonly clubservice:ClubService){}

    

    @Post()
    async createEvent(@Body() dto:User ):Promise <User>{
        console.log(dto.username,dto.role);
        return this.clubservice.create(dto);
    }

    @Get('find')
    async getEvents():Promise <User[]>{
        return this.clubservice.EventFindAll();
    }
}