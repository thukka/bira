import { Injectable, UnauthorizedException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    id: number,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(id);

    if (!user?.password) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    // If password does not match --> throw
    if (!checkPassword) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
