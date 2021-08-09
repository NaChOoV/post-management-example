import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(10)
  description: string;
}
