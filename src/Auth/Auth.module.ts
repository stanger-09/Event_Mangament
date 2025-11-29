import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Login, UserSchema } from "src/User.schema";
import { Authcontroller } from "./Auth.controller";
import { Authservice } from "./Auth.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
    ],
    controllers:[Authcontroller],
    providers:[Authservice],
    exports:[Authservice]
})
export class Authmodule{};