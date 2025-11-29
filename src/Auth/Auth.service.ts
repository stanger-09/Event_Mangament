import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Login } from "src/User.schema";
import { User } from "src/User.dto";

export class Authservice{
    constructor (@InjectModel(Login.name) private Auth:Model<Login>){}

    async find(username:string):Promise<any|null>{
        if (!username || username.trim() === "") return null;
        return this.Auth.findOne({username}).exec();
    }
}