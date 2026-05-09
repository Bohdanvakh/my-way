import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('activities')
export class ActivitiesController {
    constructor(private activitiesService: ActivitiesService) {}

    @Get()
    @HttpCode(200)
    findAll() {
        return this.activitiesService.findAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body() createActivityDto: CreateActivityDto) {
        return this.activitiesService.create(createActivityDto);
    }
}
