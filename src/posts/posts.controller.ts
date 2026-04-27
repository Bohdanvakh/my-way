import { Controller, Get, Post, Body, Path, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    findAll() string {
        return `Returns all posts.`
    }

    @Post()
    @HttpCode(201)
    create(@Body() createPostDto: createPostDto) {
        return this.postsService.create(createPostDto);
    }
}