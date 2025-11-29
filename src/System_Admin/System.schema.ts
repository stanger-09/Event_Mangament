import { Schema ,SchemaFactory,Prop} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type System=HydratedDocument<Control>;
@Schema()
export class Control{
    @Prop()
    Eventname:string

    @Prop()
    Eventid:number

    @Prop()
    title:string
}

export const SystemSchema=SchemaFactory.createForClass(Control);