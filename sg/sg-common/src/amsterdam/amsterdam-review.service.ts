import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AmsterdamSumListing } from 'src/messages/db/entities/amsterdam-listing.entity';
import { AmsterdamReview } from 'src/messages/db/entities/amsterdam-reviews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmsterdamReveiwService {

  constructor(
    @InjectRepository(AmsterdamSumListing) private amsSumListRepo:Repository<AmsterdamSumListing>,
    @InjectRepository(AmsterdamReview) private amsReviewRepo:Repository<AmsterdamReview>
  ){}

  async getOne(){
    const reviewItem =  await this.amsReviewRepo.findOne({});
    reviewItem.listing = await this.amsSumListRepo.findOne({where:{id:reviewItem.listing_id}});
    return reviewItem;
  }
}
