import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWTSECRET || 'jwt',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginModule],
})
export class LoginModule {}
