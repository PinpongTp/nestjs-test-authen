import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard) // ใช้ guard ที่สร้างขึ้นเอง
    @Post('auth/login')
    async login(@Request() req: any) {

        // ?? ยังไม่เข้าใจว่า ถูกส่งไปที่ auth service ได้อย่างไร
        console.log(req)
        console.log('>>> user <<<<')
        console.log(req.user)
        console.log('app.controller.ts login')
        return this.authService.login(req.user);
    }


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user;
    }

    // @Get()
    // getHello(): string {
    //   return this.appService.getHello();
    // }
}