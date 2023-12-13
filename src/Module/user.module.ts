import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema from '../Model/user.model';
import { UserController } from '../Controller/user.controller';
import { UserService } from '../Service/user.service';
import { UserRepository } from '../Repository/user.repository';

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
