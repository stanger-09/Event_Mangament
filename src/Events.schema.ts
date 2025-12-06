import { Schema ,SchemaFactory,Prop} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type Event=HydratedDocument<Events>;

@Schema()
export class Events{
    @Prop({required:true,unique:true})
    event_name:string

    @Prop({default:Date.now})
    date:Date

    @Prop({default:'inactive'})
    status:string;

    @Prop()
    description:string
}

export const EventSchema=SchemaFactory.createForClass(Events);