import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateActivityDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsDate()
    startDate?: Date;

    @IsOptional()
    @IsDate()
    endDate?: Date;
}