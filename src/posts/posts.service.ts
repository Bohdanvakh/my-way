import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.post.findMany();
    }

    create(createPostDto: CreatePostDto) {
        return this.prisma.post.create({
            data: createPostDto,
        });
    }
}
