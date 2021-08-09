import { IsNumberString, isPositive, IsPositive } from 'class-validator';
import { MoreThan, MoreThanOrEqual } from 'typeorm';

export class DeletePostParam {
  @IsNumberString()
  id: string;
}
