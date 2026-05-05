import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: createCarDto,
    });
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    return await `This action returns a #${id} car`;
  }

  async findNewer() {
    return await this.prisma.car.findFirst({
      orderBy: {
        year: 'desc',
      }
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return await `This action updates a #${id} car`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} car`;
  }
}
