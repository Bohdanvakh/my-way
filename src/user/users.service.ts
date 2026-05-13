import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserAlreadyExistsException } from 'src/exceptions/user-already-exists.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    // GET users/
    findAll() {
        return this.prisma.user.findMany();
    }

    // GET users/:id
    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    // POST users/
    async create(createUserDto: CreateUserDto) {
        try {
            return await this.prisma.user.create({
                data: createUserDto
            });
        } catch (e) {
            if ( e.code === 'P2002' ) {
                throw new UserAlreadyExistsException();
            }

            throw new BadRequestException('Failed to create user.');
        }
    }

    // PATCH users/:id
    async update(id: number, updateUserDto: UpdateUserDto ) {
        await this.findOne(id);

        try {
            return await this.prisma.user.update({
                where: { id },
                data: updateUserDto,
            });
        } catch (e) {
            throw new BadRequestException('Failed to update user.');
        }
    }

    // DELETE users/:id
    async remove(id: number) {
        await this.findOne(id);

        return await this.prisma.user.delete({
            where: { id },
        })
    }
}