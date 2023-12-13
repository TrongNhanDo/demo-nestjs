export class AddUserDto {
  username: string;
  password: string;
  displayName: string;
  phone: string;
  address: string;
}

export class UpdateUserDto {
  id: string;
  password: string;
  displayName: string;
  phone: string;
  address: string;
}
