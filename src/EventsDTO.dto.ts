import { IsString ,IsBoolean ,IsDate} from "class-validator";

export class EventDTO{
        @IsString()
        event_name:string
    
        @IsDate()
        date:Date
    
        @IsBoolean()
        status:string;
    
        @IsString()
        description:string
}