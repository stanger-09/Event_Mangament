import { Schema ,SchemaFactory,Prop} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type User=HydratedDocument<Login>;

// username,email,number,userid,password,role

@Schema()
export class Login{
    @Prop()
    username:string

    @Prop()
    email:string

    @Prop()
    phone:number;

    @Prop()
    userid:string

    @Prop()
    password:string

    @Prop({required:true,enum:['User','Admin','Student','Events','ClubAdmin']})
    role:string
}

export const UserSchema=SchemaFactory.createForClass(Login)