import {IsInt ,IsString} from 'class-validator'

export class SystemDTO{
    @IsInt()
    Eventid:number

    @IsString()
    title:string

    @IsString()
    Eventname:string
}