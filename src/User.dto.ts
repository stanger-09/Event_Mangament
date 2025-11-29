import { IsInt ,IsString } from "class-validator";

// username,email,number,userid,password,role

export class User{
    @IsString()
    userid:string

    @IsString()
    username:string

    @IsString()
    email:string

    @IsInt()
    phone:number

    @IsString()
    password:string

    @IsString()
    role:string
}