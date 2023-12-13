import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  displayName: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  address: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  id: string;
  password: string;
  displayName: string;
  phone: string;
  address: string;
}
