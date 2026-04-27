import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @HttpCode(200)
    findAll() string {
        return this.usersService.findAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body(), createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}