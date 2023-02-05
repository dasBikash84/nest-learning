import { Transform } from "class-transformer";
import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AmsterdamSumListing as AmsterdamSumListing } from "./amsterdam-listing.entity";

@Entity('amsterdamCalendar')
export class AmsterdamCalendar{
  @ObjectIdColumn()
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  _id: string;

  @Column()
  public listing_id: string;

  @Column({name:'date'})
  public dateOfIssue: Date;
  
  @Column({name:'reviewer_name'})
  public reviewer_name: string;
  
  @Column({name:'available'})
  public available: string;
  
  @Column({name:'price'})
  public price: string;
  
  @Column({name:'adjusted_price'})
  public adjusted_price: string;
  
  @Column({name:'minimum_nights'})
  public minimum_nights: number;
  
  @Column({name:'maximum_nights'})
  public maximum_nights: number;  

  public listing: AmsterdamSumListing
}