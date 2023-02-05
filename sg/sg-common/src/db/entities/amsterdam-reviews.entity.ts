import { Exclude, Expose, Transform } from "class-transformer";
import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AmsterdamSumListing as AmsterdamSumListing } from "./amsterdam-listing.entity";

@Entity('amsterdamReviews')
export class AmsterdamReview{
  @ObjectIdColumn()
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  _id: string;

  @PrimaryColumn()
  id: string;
  
  @Column({name:'reviewer_name'})
  public reviewer_name: string;

  @Column({name:'reviewer_id'})
  public reviewer_id: string;

  @Column()
  public comments: string;

  @Column({name:'date'})
  public dateReviewed: Date;

  @Column()
  public listing_id: string;

  @Transform(({ value }) => value._id.toString(), { toPlainOnly: true })
  @Expose({name:'listing_mongo_id'})
  public listing: AmsterdamSumListing
}