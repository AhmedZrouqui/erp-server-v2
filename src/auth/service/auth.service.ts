import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create.dto';
import { UsersService } from 'src/user/service/user.service';
import { SignInDTO } from '../dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(email: string, password: string): Promise<User | null> {
    const user = await this.userService.get({ email });
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) return null;

    return { ...user, password: undefined };
  }

  async signOut(): Promise<any> {
    return;
  }

  async signUp(user: CreateUserDto): Promise<any> {
    return await this.userService.create(user);
  }
}
