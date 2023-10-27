import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'pass1234',
  })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'pass1234',
  })
  password: string;
}

export class SessionInfoDto {
  @ApiProperty({
    example: '1',
  })
  id: number;

  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
