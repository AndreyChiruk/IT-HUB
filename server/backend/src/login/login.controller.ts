import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { type LoginRequest, type LoginResponse } from './dto/auth.types';

@Controller('/auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async token(@Body() data: LoginRequest): Promise<LoginResponse> {
    return await this.loginService.login(data);
  }
}
