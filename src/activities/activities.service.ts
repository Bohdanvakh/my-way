import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';

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

    async create(createActivityDto: CreateActivityDto) {
        try {
            return await this.prisma.activity.create({
                data: createActivityDto,
            });
        } catch (e) {
            throw new BadRequestException('Failed to create activity.');
        }
    }
}