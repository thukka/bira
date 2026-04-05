import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import type { Request, Response } from 'express';
import { JwtPayload } from './auth.interface';
import { SignInDto } from '../dto/create-signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authService.signIn(
      signInDto.id,
      signInDto.password,
    );

    response.cookie('token', token, {
      httpOnly: true,
      secure: false, // false for dev
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60,
    });

    return { success: true };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req['user'] as JwtPayload;
  }
}
