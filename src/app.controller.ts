import { Body, Param, Controller, Get, Post } from '@nestjs/common';

import { CreateUserBody } from './dtos/craete-user-body';

import { UserRepository } from './repositories/user-repository';

@Controller('users')
export class AppController {
  constructor(private userRepository: UserRepository) {}

  @Post('/create')
  async createUser(@Body() body: CreateUserBody) {
    const { name, function: memberFunction } = body;

    // Acces by prisma repository
    const user = await this.userRepository.create(name, memberFunction);

    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userRepository.getAllUsers();

    return users;
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userRepository.getUserById(id);

    return user;
  }
}
