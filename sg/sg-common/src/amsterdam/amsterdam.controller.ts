import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AmsterdamCalanderService } from './amsterdam-calander.service';
import { AmsterdamListingService } from './amsterdam-listing.service';
import { AmsterdamReveiwService } from './amsterdam-review.service';

@Controller('ams')
@UseGuards(AuthGuard)
export class AmsterdamController {

  constructor(
    private amsterdamSummaryListingService:AmsterdamListingService,
    private amsterdamReveiwService:AmsterdamReveiwService,
    private amsterdamCalanderService:AmsterdamCalanderService
    ){}

  @Get('listing')
  async getOneListing(){
    const data = await this.amsterdamSummaryListingService.getOne();
    return {message:data};
  }

  @Get('review')
  async getOneReview(){
    const data = await this.amsterdamReveiwService.getOne();
    return {message:data};
  }

  @Get('calander')
  async getOneCalander(){
    const data = await this.amsterdamCalanderService.getOne();
    return {message:data};
  }
}
