import { Controller, Get, Post, Patch, Delete, Body, HttpCode, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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

    @Patch(':id')
    @HttpCode(201)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(Number(id), updateUserDto);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return this.usersService.delete(Number(id));
    }
}
