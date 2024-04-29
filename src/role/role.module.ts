import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import roleSchema from './role.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Role', schema: roleSchema }])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
