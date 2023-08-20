import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { CreateUserDto } from '../dto/create.dto';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserDto } from '../dto/delete.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private user: UsersService) {}

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User | null> {
    return await this.user.get({ id });
  }

  @Get('/')
  async getUsers(
    @Query() query: Record<string, unknown>,
  ): Promise<Array<User>> {
    return await this.user.getMany(query);
  }

  @Post('/')
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return await this.user.create(body);
  }

  @Delete('/')
  async deleteUser(@Body() body: DeleteUserDto): Promise<User | null> {
    console.log(body);
    return await this.user.delete(body);
  }
}
