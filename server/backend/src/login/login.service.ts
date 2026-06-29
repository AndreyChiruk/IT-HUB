import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/auth.types';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) {}

  login(data: LoginRequest): LoginResponse {
    return {
      token: this.jwtService.sign(data),
      user: {
        id: 1,
        email: data.email,
        name: data.name,
      },
    };
  }
}
