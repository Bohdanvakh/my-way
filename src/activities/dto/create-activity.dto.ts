import { IsInt, IsString } from 'class-validator';

export class CreateActivityDto {
    @IsString()
    name: string;

    @IsInt()
    userId: number;
}