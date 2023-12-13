import { Injectable } from '@nestjs/common';
import { AddUserDto, UpdateUserDto } from '../Dto/user.dto';
import { UserRepository } from 'src/Repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAllUsers() {
    return this.userRepository.findAll();
  }

  getUserById(id: string) {
    return this.userRepository.findById(id);
  }

  addUser(user: AddUserDto) {
    return this.userRepository.insertOne(user);
  }

  addManyUser(listUser: AddUserDto[]) {
    return this.userRepository.insertMany(listUser);
  }

  updateUser(user: UpdateUserDto) {
    return user;
  }

  deleteUser(id: string) {
    return id;
  }
}
