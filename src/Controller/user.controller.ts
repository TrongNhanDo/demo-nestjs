import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../Service/user.service';
import { AddUserDto, UpdateUserDto } from '../Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  addUser(@Body() user: AddUserDto) {
    return this.userService.addUser(user);
  }

  @Post('/insert-many/')
  addManyUser(@Body() payload: { listUser: AddUserDto[] }) {
    return this.userService.addManyUser(payload.listUser);
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    return this.userService.updateUser(user);
  }

  @Delete()
  deleteUser(@Body() payload: { id: string }) {
    if (!payload.id) {
      return {
        errors: {
          message: 'Id is required field',
        },
      };
    }

    return this.userService.deleteUser(payload.id);
  }
}
