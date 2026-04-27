import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Get()
    @HttpCode(200)
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
