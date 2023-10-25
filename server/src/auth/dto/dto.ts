import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'pass1234',
  })
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

export class GetSessionInfoDto {
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
