import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { RequestHeaderModel } from "src/models/header.model";

export class ReqHeaderParserInterceptor implements NestInterceptor{

  async intercept(
    context: ExecutionContext, 
    next: CallHandler<any>
    ): Promise<Observable<any>> {

    const request = context.switchToHttp().getRequest();
    const headers= request.rawHeaders || [];
    const headerData = new RequestHeaderModel();

    headerData['ipAddress'] = request.ip;

    for(let i=0; i <headers.length;){
      try {
        headerData.headers[headers[i]] = headers[i+1];
      } catch (error) {console.log(error)}      
      i += 2;
    }
    request.headerData = headerData;
    // console.log(headerData);
    return next.handle();
  }

}