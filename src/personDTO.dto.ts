import { IsInt ,IsString} from "class-validator";

export class PersonDTO{
    @IsInt()
    id:number

    @IsString()
    name:string

    @IsString()
    password:string
}