import { PartialType } from '@nestjs/swagger';
import { GetUserDto } from './get.dto';

export class DeleteUserDto extends PartialType(GetUserDto) {}
