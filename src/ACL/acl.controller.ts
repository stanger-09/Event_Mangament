import { Body, Controller ,Post} from "@nestjs/common";
import type { User } from "src/User.schema";
import { aclservice } from "./acl.service";


@Controller()
export class aclController{
    constructor(private readonly aclservice:aclservice){}


    @Post('register')
    async create(@Body() dto:User){
        console.log("ACL: ",dto);
        return this.aclservice.UserHandel(dto);
    }
}