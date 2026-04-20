import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {
        
    }

    login() {

    }

    signup() {
        return { message: 'I am sing up' }
    }

    signin() {
        return { message: 'I am sing in' }
    }
}