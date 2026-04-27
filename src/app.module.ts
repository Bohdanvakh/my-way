import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import 'dotenv/config';

@Module({
  imports: [CarsModule,
            AuthModule,
            UsersModule,
            PostsModule,
            PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
