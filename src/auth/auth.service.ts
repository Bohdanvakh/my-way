import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) { }

    login() {

    }

    async signup(email: string, password: string, firstName: string, lastName: string) {
        const hash = await bcrypt.hash(password, 10);

        // create user
        const user = await this.prisma.user.create({
            data: { email, hash, firstName, lastName }
        });

        // return JWT token if registration is successful
        return this.signToken(user.id, user.email);
    }

    async signin(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email }
        });

        if (!user) throw new UnauthorizedException('Incorrect email or password.');

        const passwordMatch = await bcrypt.compare(password, user.hash);

        if (!passwordMatch) throw new UnauthorizedException('Incorrect email or password.');

        // return JWT token if login is successful
        return this.signToken(user.id, user.email);
    }

    private async signToken(id: number, email: string) {
        const payload = { sub: id, email };

        const token = await this.jwt.signAsync(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '24h'
        });

        return { access_token: token };
    }
}