import { Body, Controller ,Get,Post} from "@nestjs/common";
import { Authservice } from "./Auth.service";
import { Login } from "src/User.schema";
import { User } from "src/User.dto";

@Controller('auth')
export class Authcontroller{
    constructor(private readonly auth:Authservice){}

    @Post('find')
    async find(@Body('username') username:string):Promise <Login | null>{
        
        return this.auth.find(username);
    }

    @Post('sigIn')
    async singIn(@Body() body:{username:string ,password:string}){
        return this.auth.sigIn(body.username,body.password);
    }
}