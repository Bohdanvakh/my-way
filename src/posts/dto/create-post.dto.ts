import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePostDto {
  @IsBoolean()
  approved: boolean;

  @IsBoolean()
  published: boolean;

  @IsInt()
  authorId: number;

  @IsString()
  title: string;
}