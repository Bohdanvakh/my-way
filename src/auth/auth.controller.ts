import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    sineup(@Body() body: { email: string, password: string, firstName: string, lastName: string }) {
        return this.authService.signup(body.email, body.password, body.firstName, body.lastName)
    }

    @Post('signin')
    signin(@Body() body: { email: string, password: string }) {
        return this.authService.signin(body.email, body.password)
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