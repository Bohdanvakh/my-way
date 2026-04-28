import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    findOne(id: number) {
        return this.prisma.post.findUnique({
            where: { id },
        });
    }

    findAll() {
        return (this.prisma.post.findMany());
    }

    create(createPostDto: CreatePostDto) {
        return this.prisma.post.create({
            data: createPostDto,
        });
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        return this.prisma.post.update({
            where: { id },
            data: updatePostDto,
        });
    }
}
