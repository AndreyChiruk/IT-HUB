import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/entities/users/user.module';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTSECRET || 'jwt',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterModule],
})
export class RegisterModule {}
