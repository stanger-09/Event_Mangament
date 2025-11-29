import { Prop ,Schema ,SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Document } from "mongoose";

export type Club=HydratedDocument<Event>;

@Schema()
export class Event extends Document{
    @Prop()
    EventId:number

    @Prop()
    EventName:string
}

export const EventSchema=SchemaFactory.createForClass(Event);