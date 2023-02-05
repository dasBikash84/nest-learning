import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const RequestHeader = createParamDecorator(
  (data:never, context:ExecutionContext) => {
    return context.switchToHttp().getRequest().headerData;
  }
);