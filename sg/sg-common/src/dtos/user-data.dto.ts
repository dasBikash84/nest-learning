import { Expose } from 'class-transformer';

export class UserDataDto {
  @Expose()
  email: string;

  @Expose()
  id: string;
}
