import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

import { CreateUserBody } from './dtos/create-user-body';

import { UserRepository } from './repositories/user-repository';

@Controller('users')
export class AppController {
  constructor(private userRepository: UserRepository) {}

  @Post('/create')
  async createUser(@Body() body: CreateUserBody) {
    const { name, description } = body;

    // Acces by prisma repository
    const user = await this.userRepository.create(name, description);

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

  @Patch('/edit/:id')
  async editUser(@Param('id') id: string, @Body() body: CreateUserBody) {
    const { name, description } = body;

    const user = await this.userRepository.editUser(id, name, description);

    return user;
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: string) {
    const user = await this.userRepository.deleteUser(id);

    return user;
  }
}
