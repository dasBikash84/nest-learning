import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AmsterdamCalendar } from 'src/messages/db/entities/amsterdam-calendar.entity';
import { AmsterdamSumListing } from 'src/messages/db/entities/amsterdam-listing.entity';
import { AmsterdamReview } from 'src/messages/db/entities/amsterdam-reviews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmsterdamListingService {

  constructor(
    @InjectRepository(AmsterdamSumListing) private amsSumListRepo:Repository<AmsterdamSumListing>,
    @InjectRepository(AmsterdamReview) private amsReviewRepo:Repository<AmsterdamReview>,
    @InjectRepository(AmsterdamCalendar) private amsCalanderRepo:Repository<AmsterdamCalendar>
  ){}

  async getOne(){
    const listItem =  await this.amsSumListRepo.findOne({});
    listItem.allReviews = await this.amsReviewRepo.find({where:{listing_id:listItem.id}});
    listItem.allCalendarEntries = await this.amsCalanderRepo.find({where:{listing_id:listItem.id}});
    return listItem;
  }
}
