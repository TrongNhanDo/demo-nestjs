import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) {}

  getAllRoles() {
    return this.roleModel.find();
  }
}
