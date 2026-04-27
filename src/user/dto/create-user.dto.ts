import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    hash: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}