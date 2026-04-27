import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    create(createPostDto: createPostDto) {
        return this.prisma.post.create({
            data: createPostDto,
        });
    }
}
