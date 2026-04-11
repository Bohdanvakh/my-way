import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login() {

    }

    signup() {
        return { message: 'I am sing up' }
    }

    signin() {
        return { message: 'I am sing in' }
    }
}