import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { type LoginRequest, type LoginResponse } from './dto/auth.types';

@Controller('/auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  token(@Body() data: LoginRequest): LoginResponse {
    return this.loginService.login(data);
  }
}
