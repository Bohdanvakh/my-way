import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { ActivitiesModule } from './activities/activities.module';
import { LoggerMiddleware } from './logger.middleware';
import { JwtGuard } from './guards/jwt.guard';

import 'dotenv/config';

@Module({
    imports: [
                    CarsModule,
                    AuthModule,
                    UsersModule,
                    PostsModule,
                    ActivitiesModule,
                    PrismaModule],
    controllers: [
                    AppController],
    providers: [
                    AppService,
                    {provide: APP_GUARD, useClass: JwtGuard}],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({path: 'activities', method: RequestMethod.GET});
    }
}
