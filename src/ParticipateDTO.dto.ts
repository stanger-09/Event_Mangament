import { IsDate ,IsString} from "class-validator";
export class ParticipateDTO{
    @IsString()
    userId:String;

    @IsString()
    EventId:String;

    @IsDate()
    date:number;

    @IsString()
    status:string;
}