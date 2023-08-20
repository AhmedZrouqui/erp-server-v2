import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(4, 32)
  fullName!: string;

  @ApiProperty()
  @IsString()
  avatar!: string | null;

  @ApiProperty()
  @IsEmail()
  @Length(8, 32)
  email!: string;

  @ApiProperty()
  @IsString()
  @Length(8, 32)
  password!: string;

  @ApiProperty()
  @IsBoolean()
  isVerified!: boolean | null;
}
