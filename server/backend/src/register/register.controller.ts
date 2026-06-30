import { Controller, Body, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import {
  type RegisterResponse,
  type RegisterRequest,
} from './dto/register.types';
@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async register(@Body() data: RegisterRequest): Promise<RegisterResponse> {
    return this.registerService.register(data);
  }
}
