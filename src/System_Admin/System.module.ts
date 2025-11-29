import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Systemservice } from "./System.service";
import { SystemController } from "./System.controller";
import { Control ,SystemSchema} from "./System.schema";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Control.name,schema:SystemSchema}]),
    ],
    providers:[Systemservice],
    controllers:[SystemController]
})
export class SystemModule{};