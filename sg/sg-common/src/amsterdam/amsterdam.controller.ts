import { Controller, Get } from '@nestjs/common';
import { AmsterdamCalanderService } from './amsterdam-calander.service';
import { AmsterdamListingService } from './amsterdam-listing.service';
import { AmsterdamReveiwService } from './amsterdam-review.service';

@Controller('ams')
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
