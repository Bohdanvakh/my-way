import { IsInt, IsString } from 'class-validator';

export class CreateActivityDto {
    @IsString()
    name: string;

    @IsInt()
    userId: number;
    
    status?: string;
    startDate?: Date;
    endDate?: Date;
}
