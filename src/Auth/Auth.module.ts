import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Login, UserSchema } from "src/User.schema";
import { Authcontroller } from "./Auth.controller";
import { Authservice } from "./Auth.service";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./Auth.guard";
import { RolesGuard } from "./role.guard";
 
//test module
@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
        JwtModule.register({
            global:true,
            secret:"DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.",
            signOptions:{expiresIn:'60m'},
        }),
    ],
    controllers:[Authcontroller],
    providers:[
        Authservice,
        {
            provide:APP_GUARD,
            useClass:AuthGuard,
        },
        {
            provide:APP_GUARD,
            useClass:RolesGuard,
        }
    ],
    exports:[Authservice]
})
export class Authmodule{};