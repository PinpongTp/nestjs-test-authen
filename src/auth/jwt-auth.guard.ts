import { 
    Injectable,
    ExecutionContext,
    UnauthorizedException
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard(['jwt']) {
    canActivate(context: ExecutionContext) {
        console.log('canActivate' , context)
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any) {
        
        console.log('handleRequest user', err, user)

        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}

