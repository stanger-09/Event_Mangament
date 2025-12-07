import { CanActivate ,Injectable ,ExecutionContext, UnauthorizedException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "src/role.enum";
import { ROLES_KEY } from "src/roles.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtservice:JwtService,
        private reflector:Reflector

    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) {
        throw new UnauthorizedException("No Authorization header");
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
        throw new UnauthorizedException("Invalid token format");
        }

        try {
        const decoded = await this.jwtservice.verifyAsync(token);

        // Attach decoded JWT payload to request
        request.user = decoded;

        return true;
        } catch (err) {
        throw new UnauthorizedException("Invalid or expired token");
        }
    }
    // async canActivate(context: ExecutionContext):Promise <boolean> {
    //     const request=context.switchToHttp().getRequest();
    //     const auth=request.headers.authorization;
    //     const token=auth?.split(" ")[1];
    //     if(!token){
    //         throw new UnauthorizedException();
    //     }
    //     try{
    //         const tokenload=await this.jwtservice.verifyAsync(token);
    //         request.user={
    //             UserId:tokenload.sub,
    //             Username:tokenload.username
    //         }
    //         return true;
    //     }catch{
    //         throw new UnauthorizedException();
    //     }
    // }
}