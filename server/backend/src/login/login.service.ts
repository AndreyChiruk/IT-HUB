import { LoginRequest, LoginResponse } from './dto/auth.types';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/entities/users/user.service';
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(data: LoginRequest): Promise<LoginResponse> {
    const result = await this.userService.findByEmail(data.email);
    if (!result) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = result.toJSON();

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      token: this.jwtService.sign({ email: user.email, name: user.name }),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }
}
