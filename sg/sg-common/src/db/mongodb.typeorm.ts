import { TypeOrmModule } from "@nestjs/typeorm";
import { AmsterdamCalendar } from "./entities/amsterdam-calendar.entity";
import { AmsterdamSumListing } from "./entities/amsterdam-listing.entity";
import { AmsterdamReview as AmsterdamReview } from "./entities/amsterdam-reviews.entity";

export const mongoCon = TypeOrmModule.forRoot({
    type: "mongodb",
    database: "airBnbClone",
    synchronize: false,
    logging: false,
    entities: [AmsterdamSumListing,AmsterdamReview,AmsterdamCalendar],
    migrations: [],
    subscribers: [],
    }
    );

export const amsListingFeature = TypeOrmModule.forFeature([AmsterdamSumListing]);
export const amsReviewFeature = TypeOrmModule.forFeature([AmsterdamReview]);
export const amsCalendarFeature = TypeOrmModule.forFeature([AmsterdamCalendar]);