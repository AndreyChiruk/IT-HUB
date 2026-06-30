import { Injectable, ConflictException } from '@nestjs/common';
import { UserService } from 'src/entities/users/user.service';
import {
  type RegisterResponse,
  type RegisterRequest,
} from './dto/register.types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegisterService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const result = await this.userService.findByEmail(data.email);
    if (result) {
      throw new ConflictException('This user created');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createdresult = await this.userService.create({
      email: data.email,
      name: data.name,
      password: hashedPassword,
    });

    const user = createdresult.toJSON();

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
