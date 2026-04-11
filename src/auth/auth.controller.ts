import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    sineup() {
        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }

    @Get()
    findAll(): string {
        return 'Auth controller get.'
    }

    @Post()
    create(): string {
        return 'Auth controller post.'
    }
}