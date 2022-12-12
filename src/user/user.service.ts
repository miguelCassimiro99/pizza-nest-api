import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    //? encrypt password send on body
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    //TODO: move the prisma action into repository (contracts)
    const createdUser = await this.prisma.users.create({
      data: {
        id: randomUUID(),
        ...user,
      },
    });

    //TODO: use a 422 to treat in case of non-unique email
    return {
      ...createUserDto,
      password: undefined,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
