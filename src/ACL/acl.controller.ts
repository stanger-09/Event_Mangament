import { Body, Controller ,Post} from "@nestjs/common";
import type { User } from "src/User.schema";
import { aclservice } from "./acl.service";
import { EventDTO } from "src/EventsDTO.dto";


@Controller()
export class aclController{
    constructor(private readonly aclservice:aclservice){}


    @Post('register')
    async create(@Body() userdto:User,@Body() eventdto:EventDTO){
        console.log("ACL: ",userdto);
        return this.aclservice.UserHandel(userdto,eventdto);
    }
}