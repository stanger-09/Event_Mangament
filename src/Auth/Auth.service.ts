import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Login } from "src/User.schema";
import { User } from "src/User.dto";
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class Authservice{
    constructor (@InjectModel(Login.name) private Auth:Model<Login>,
        private jwtService:JwtService){}

    async sigIn(username:string ,password:string):Promise <{access_token:string,username:string,userid:string}>{
        const user=await this.find(username);
        // console.log(user);
        if(!user || user?.password!==password){
            throw new UnauthorizedException();
        }
        const payload={sub:user.userid ,username:user.username};
        return {
            access_token:await this.jwtService.signAsync(payload),
            username:user.username,
            userid:user.userid
        };
    }

    async find(username:string):Promise<User | null>{
        console.log(username);
        if (!username || username.trim() === "") return null;
        return this.Auth.findOne({username}).exec();
    }
}