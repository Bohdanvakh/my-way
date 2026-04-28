import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    update(id: number, updateUserDto: UpdateUserDto ) {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
    }
}