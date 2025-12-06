import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Login, UserSchema } from "src/User.schema";
import { Authcontroller } from "./Auth.controller";
import { Authservice } from "./Auth.service";
import { JwtModule } from "@nestjs/jwt";
 
//test module
@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
        JwtModule.register({
            global:true,
            secret:"DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.",
            signOptions:{expiresIn:'60s'},
        }),
    ],
    controllers:[Authcontroller],
    providers:[Authservice],
    exports:[Authservice]
})
export class Authmodule{};