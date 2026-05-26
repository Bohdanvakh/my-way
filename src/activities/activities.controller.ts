import { Controller, Get, Post, Body, Patch, Param, HttpCode } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivitiesController {
    constructor(private activitiesService: ActivitiesService) {}

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id') id: string) {
        return this.activitiesService.findOne(Number(id));
    }

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

    @Patch(':id')
    @HttpCode(201)
    update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto ) {
        return this.activitiesService.update(Number(id), updateActivityDto);
    }
}
