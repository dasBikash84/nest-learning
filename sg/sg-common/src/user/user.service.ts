import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/user.entity';
import {  Repository } from 'typeorm';

import { ObjectID } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private repo:Repository<User>
  ){}



  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  async findOne(id: string) {
    return this.repo.findOneBy(new ObjectID(id));
  }

  find(email: string) {
    return this.repo.find({ where: {email} });
  }

  async update(id: string, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
