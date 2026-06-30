import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, CreateUserInterface } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findById(id: number) {
    return this.userModel.findByPk(id);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ where: { email: email } });
  }

  async create(data: CreateUserInterface): Promise<User> {
    return this.userModel.create(data);
  }
}
