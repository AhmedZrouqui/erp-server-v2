import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetUserDto {
  @IsString({ always: true })
  @ApiProperty({
    type: String,
    minLength: 1,
    example: '3b221efc-ef8a-4517-a6a9-83a111a1e0cd',
    required: true,
  })
  id: string;
}
