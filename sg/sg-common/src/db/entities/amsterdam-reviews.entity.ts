import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AmsterdamSumListing as AmsterdamSumListing } from "./amsterdam-listing.entity";

@Entity('amsterdamReviews')
export class AmsterdamReview{
  @ObjectIdColumn()
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

  public listing: AmsterdamSumListing
}