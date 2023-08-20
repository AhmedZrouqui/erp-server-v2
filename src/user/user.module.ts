import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UsersService } from './service/user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
