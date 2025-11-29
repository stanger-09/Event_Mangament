import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Systemservice } from "./System.service";
import { SystemController } from "./System.controller";
import { Login,UserSchema } from "src/User.schema";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Login.name,schema:UserSchema}]),
    ],
    providers:[Systemservice],
    controllers:[SystemController],
    exports:[Systemservice]
})
export class SystemModule{};