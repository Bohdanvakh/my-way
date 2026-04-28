import { IsEmail, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsEmail()
    email?: string;

    hash?: string;

    @IsString()
    firstName?: string;

    @IsString()
    lastName?: string;
}