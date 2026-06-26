import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/auth.types';

@Injectable()
export class LoginService {
  login(data: LoginRequest): LoginResponse {
    return {
      token: 'token',
      user: {
        id: 1,
        email: data.email,
        name: data.name,
      },
    };
  }
}
