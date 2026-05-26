import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.activity.findMany(
            {
                include: {
                    user: true
                }
            }
        );
    }

    async findOne(id: number) {
        const activity = await this.prisma.activity.findUnique({
            where: { id }
        });

        if (!activity) {
            throw new NotFoundException('Activiti not fount');
        }

        return activity;
    }

    async create(createActivityDto: CreateActivityDto) {
        try {
            return await this.prisma.activity.create({
                data: createActivityDto,
            });
        } catch (e) {
            throw new BadRequestException('Failed to create activity.');
        }
    }

    async update(id: number, updateActivityDto: UpdateActivityDto) {
        await this.findOne(id);

        try {
            return await this.prisma.activity.update({
                where: { id },
                data: updateActivityDto
            });
        } catch (e) {
            throw new BadRequestException('Failed to update activity');
        }
    }
}