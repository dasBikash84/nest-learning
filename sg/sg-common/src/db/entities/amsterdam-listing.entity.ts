import { Expose, Transform } from "class-transformer";
import { Column, Entity, JoinColumn, ObjectIdColumn, OneToMany, PrimaryColumn } from "typeorm";
import { AmsterdamCalendar } from "./amsterdam-calendar.entity";
import { AmsterdamReview } from "./amsterdam-reviews.entity";


@Entity('amsterdamListing')
export class AmsterdamSumListing{
  @ObjectIdColumn()
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  _id: string;

  @PrimaryColumn()
  id: string;
  
  @Column({name:'listing_url'})
  public listingUrl: string;

  @Column({name:'scrape_id'})
  public scrapeId: string;

  @Column({name:'last_scraped'})
  public lastScraped: Date;

  @Column({name:'source'})
  public source: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column({name:'picture_url'})
  public pictureUrl: string;

  @Column({name:'host_id'})
  public hostId: string;

  @Column({name:'host_url'})
  public hostUrl: string;

  @Column({name:'host_name'})
  public hostName: string;

  @Column({name:'host_since'})
  public hostSince: Date;

  @Column({name:'host_location'})
  public hostLocation: string;

  @Column({name:'host_response_time'})
  public hostResponseTime: string;

  @Column({name:'host_response_rate'})
  public hostResponseRate: string;

  @Column({name:'host_acceptance_rate'})
  public host_acceptance_rate: string;

  @Column({name:'host_is_superhost'})
  public host_is_superhost: string;

  @Column({name:'host_thumbnail_url'})
  public host_thumbnail_url: string;

  @Column({name:'host_picture_url'})
  public host_picture_url: string;

  @Column({name:'host_neighbourhood'})
  public host_neighbourhood: string;

  @Column({name:'host_listings_count'})
  public host_listings_count: number;

  @Column({name:'host_total_listings_count'})
  public host_total_listings_count: number;

  @Column({name:'host_verifications'})
  public host_verifications: string[];

  @Column({name:'host_has_profile_pic'})
  public host_has_profile_pic: string;

  @Column({name:'host_identity_verified'})
  public host_identity_verified: string;

  @Column({name:'neighbourhood_cleansed'})
  public neighbourhood_cleansed: string;

  @Column({name:'latitude',type:'double'})
  public latitude: number;

  @Column({name:'longitude',type:'double'})
  public longitude: number;

  @Column({name:'property_type'})
  public property_type: string;

  @Column({name:'room_type'})
  public room_type: string;

  @Column({name:'accommodates'})
  public accommodates: number;

  @Column({name:'bathrooms_text'})
  public bathrooms_text: string;

  @Column({name:'bedrooms'})
  public bedrooms: number;

  @Column({name:'beds'})
  public beds: number;

  @Column({name:'amenities'})
  public amenities: string[];

  @Column({name:'price'})
  public price: string;

  @Column({name:'minimum_nights'})
  public minimum_nights: number;

  @Column({name:'maximum_nights'})
  public maximum_nights: number;

  @Column({name:'minimum_minimum_nights'})
  public minimum_minimum_nights: number;

  @Column({name:'maximum_minimum_nights'})
  public maximum_minimum_nights: number;

  @Column({name:'minimum_maximum_nights'})
  public minimum_maximum_nights: number;

  @Column({name:'maximum_maximum_nights'})
  public maximum_maximum_nights: number;

  @Column({name:'minimum_nights_avg_ntm',type:'double'})
  public minimum_nights_avg_ntm: number;

  @Column({name:'maximum_nights_avg_ntm',type:'double'})
  public maximum_nights_avg_ntm: number;

  @Column({name:'has_availability'})
  public has_availability: string;

  @Column({name:'availability_30'})
  public availability_30: number;

  @Column({name:'availability_60'})
  public availability_60: number;

  @Column({name:'availability_90'})
  public availability_90: number;

  @Column({name:'availability_365'})
  public availability_365: number;

  @Column({name:'calendar_last_scraped'})
  public calendar_last_scraped: Date;

  @Column({name:'number_of_reviews'})
  public number_of_reviews: number;

  @Column({name:'number_of_reviews_ltm'})
  public number_of_reviews_ltm: number;

  @Column({name:'number_of_reviews_l30d'})
  public number_of_reviews_l30d: number;

  @Column({name:'first_review'})
  public first_review: Date;

  @Column({name:'last_review'})
  public last_review: Date;

  @Column({name:'review_scores_rating',type:'double'})
  public review_scores_rating: number;

  @Column({name:'review_scores_accuracy',type:'double'})
  public review_scores_accuracy: number;

  @Column({name:'review_scores_cleanliness',type:'double'})
  public review_scores_cleanliness: number;

  @Column({name:'review_scores_checkin',type:'double'})
  public review_scores_checkin: number;

  @Column({name:'review_scores_communication',type:'double'})
  public review_scores_communication: number;

  @Column({name:'review_scores_location',type:'double'})
  public review_scores_location: number;

  @Column({name:'review_scores_value',type:'double'})
  public review_scores_value: number;

  @Column({name:'license'})
  public license: string;

  @Column({name:'instant_bookable'})
  public instant_bookable: string;

  @Column({name:'calculated_host_listings_count'})
  public calculated_host_listings_count: number;

  @Column({name:'calculated_host_listings_count_entire_homes'})
  public calculated_host_listings_count_entire_homes: number;

  @Column({name:'calculated_host_listings_count_private_rooms'})
  public calculated_host_listings_count_private_rooms: number;

  @Column({name:'calculated_host_listings_count_shared_rooms'})
  public calculated_host_listings_count_shared_rooms: number;

  @Column({name:'reviews_per_month',type:'double'})
  public reviews_per_month: number;

  @Transform(({ value }) => value.map(v => v._id.toString()), { toPlainOnly: true })
  @Expose({name:'review_db_ids'})
  public allReviews:AmsterdamReview[];

  @Transform(({ value }) => value.map(v => v._id.toString()), { toPlainOnly: true })
  @Expose({name:'calander_db_ids'})
  public allCalendarEntries:AmsterdamCalendar[]
}