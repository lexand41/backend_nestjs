import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtService } from '@nestjs/jwt';
// import { JwtModule } from '@nestjs/jwt';

@Module({
  // imports: [JwtModule],
  providers: [TokenService, JwtService],
  exports: [TokenService],
})
export class TokenModule {}
