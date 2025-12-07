import { Injectable, UnauthorizedException ,CanActivate, ExecutionContext} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Login } from "src/User.schema";
import { User } from "src/User.dto";
import {JwtService} from '@nestjs/jwt';
import { Observable } from "rxjs";

@Injectable()
export class Authservice implements CanActivate{
    constructor (@InjectModel(Login.name) private Auth:Model<Login>,
        private jwtService:JwtService){}


    async canActivate(context: ExecutionContext):Promise< boolean| any> {
        const request=context.switchToHttp().getRequest();
        const authHead=request.headers.authorization;
        if(!authHead){
            throw new UnauthorizedException("Token not provided");
        }
        const [type,token]=authHead.split(" ");
        if(type!=="Bearer" || !token){
            throw new UnauthorizedException("Invalid token !");
        }
        try{
            const decode=await this.jwtService.verifyAsync(token);
            request.user=decode;
            return true;
        }catch(err){
            throw new UnauthorizedException("Invalid or Exparied token");
        }
    }
    async sigIn(username:string ,password:string):Promise <{access_token:string,username:string,userid:string,role:string}>{
        const user=await this.find(username);
        if(!user || user?.password!==password){
            throw new UnauthorizedException();
        }
        const payload={sub:user.userid ,username:user.username,role:user.role};
        return {
            access_token:await this.jwtService.signAsync(payload),
            username:user.username,
            userid:user.userid,
            role:user.role
        };
    }

    async find(username:string):Promise<User | null>{
        console.log(username);
        if (!username || username.trim() === "") return null;
        return this.Auth.findOne({username}).exec();
    }
}