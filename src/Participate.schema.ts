import { Schema ,SchemaFactory,Prop} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from "mongoose";
export type Participate=HydratedDocument<Enroll>;

@Schema()
export class Enroll{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    userId:string;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Events'})
    EventId:string;

    @Prop()
    date:Date;

    @Prop()
    status:String;
}
export const PartSchema=SchemaFactory.createForClass(Enroll);