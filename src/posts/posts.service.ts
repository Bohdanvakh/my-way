import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async findOne(id: number) {
        const post = await this.prisma.post.findUnique({
            where: { id },
            include: { author: true }
        });
        
        if (!post) {
            throw new NotFoundException('Post not found.');
        }

        return post;
    }

    findAll() {
        return this.prisma.post.findMany(
            {
                include: { author: true }
            }
        );
    }

    async create(createPostDto: CreatePostDto) {
        try {
            return await this.prisma.post.create({
                data: createPostDto,
            });
        } catch (e) {
            throw new BadRequestException('Failed to create post.');
        }
    }

    async update(id: number, updatePostDto: UpdatePostDto) {
        await this.findOne(id);

        try {
            return await this.prisma.post.update({
                where: { id },
                data: updatePostDto,
            });
        } catch (e) {
            throw new NotFoundException('Post not found.');
        }
    }

    async remove(id: number) {
        await this.findOne(id);

        return await this.prisma.post.delete({
            where: { id },
        });
    }
}
