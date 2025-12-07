import { Body, Controller ,Get,HttpCode,HttpStatus,NotImplementedException,Post, Request, UseGuards} from "@nestjs/common";
import { Authservice } from "./Auth.service";
import { Login } from "src/User.schema";
import { User } from "src/User.dto";
import { AuthGuard } from "./Auth.guard";

@Controller('auth')
export class Authcontroller{
    constructor(private readonly auth:Authservice){}

   
    // login (@Body() input :{username:string ,password:string}){
    //     // return this.auth.find(input);
    // }
    @Post('find')
    async find(@Body('username') username:string):Promise <Login | null>{
        
        return this.auth.find(username);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async singIn(@Body() body:{username:string ,password:string}){
        return this.auth.sigIn(body.username,body.password);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    getUserInfo(@Request() request){
        return request.user;
    }

}