import { Controller, Get, Post, Patch, Body, Param, Delete, HttpCode } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id') id: string) {
        return this.postsService.findOne(Number(id));
    }

    @Get()
    @HttpCode(200)
    findAll() {
        return this.postsService.findAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }

    @Patch(':id')
    @HttpCode(201)
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(Number(id), updatePostDto);
    }
}