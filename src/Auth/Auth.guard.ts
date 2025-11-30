import { CanActivate ,Injectable ,ExecutionContext, UnauthorizedException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtservice:JwtService){}

    async canActivate(context: ExecutionContext):Promise <boolean> {
        const request=context.switchToHttp().getRequest();
        const auth=request.headers.authorization;
        // console.log(auth);
        const token=auth?.split(" ")[1];
        // console.log(token);
        if(!token){
            throw new UnauthorizedException();
        }
        try{
            const tokenload=await this.jwtservice.verifyAsync(token);
            request.user={
                UserId:tokenload.sub,
                Username:tokenload.username
            }
            return true;
        }catch{
            throw new UnauthorizedException();
        }
    }
}