import { Module } from '@nestjs/common';
import { amsCalendarFeature, amsListingFeature, amsReviewFeature, mongoCon } from 'src/messages/db/mongodb.typeorm';
import { AmsterdamReveiwService } from './amsterdam-review.service';
import { AmsterdamController } from './amsterdam.controller';
import { AmsterdamListingService as AmsterdamListingService } from './amsterdam-listing.service';
import { AmsterdamCalanderService } from './amsterdam-calander.service';

@Module({
  imports:[
    mongoCon,
    amsListingFeature,
    amsReviewFeature,
    amsCalendarFeature
  ],
  controllers: [AmsterdamController],
  providers: [AmsterdamListingService,AmsterdamReveiwService,AmsterdamCalanderService],
})
export class AmsterdamModule {}
