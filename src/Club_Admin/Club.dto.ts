import { IsInt ,IsString} from "class-validator";

export class EventDTO{
    @IsInt()
    EventId:number

    @IsString()
    EventName:string

}