import { Controller, Get, Post, Body, Param, Delete, HttpCode } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    @HttpCode(200)
    findAll() {
        return `Returns all posts.`
    }

    @Post()
    @HttpCode(201)
    create(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }
}