import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "src/user/user.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor{

  constructor(private userService:UserService){}

  async intercept(
    context: ExecutionContext, 
    next: CallHandler<any>
    ): Promise<Observable<any>> {

    const request = context.switchToHttp().getRequest();
    const {userId} = request.session || {};

    if(userId){
      const user = await this.userService.findOne(userId);
      request.currentUser = user;
    }

    return next.handle();
  }

}