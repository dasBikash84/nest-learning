import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AmsterdamCalendar } from 'src/db/entities/amsterdam-calendar.entity';
import { AmsterdamSumListing } from 'src/db/entities/amsterdam-listing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmsterdamCalanderService {

  constructor(
    @InjectRepository(AmsterdamSumListing) private amsSumListRepo:Repository<AmsterdamSumListing>,
    @InjectRepository(AmsterdamCalendar) private amsCalanderRepo:Repository<AmsterdamCalendar>
  ){}

  async getOne(){
    const calanderItem =  await this.amsCalanderRepo.findOne({});
    calanderItem.listing = await this.amsSumListRepo.findOne({where:{id:calanderItem.listing_id}});
    return calanderItem;
  }
}
