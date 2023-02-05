import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
  (data:never, context:ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    // console.log(req.rawHeaders);
    return req.currentUser;
  }
);