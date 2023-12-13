import { Module } from '@nestjs/common';
import { UserController } from '../Controller/user.controller';
import { UserService } from '../Service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from 'src/Repository/user.repository';
import userSchema from '../Model/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
