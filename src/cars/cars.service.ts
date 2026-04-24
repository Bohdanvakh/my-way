import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  create(createCarDto: CreateCarDto) {
    return this.prisma.car.create({
      data: createCarDto,
    });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  async findNewer() {
    return this.prisma.car.findFirst({
      orderBy: {
        year: 'desc',
      }
    });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
