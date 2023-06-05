import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTeamMemberBody } from './dtos/craete-team-member-body';

import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('users')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Get()
  async getAllUsers() {
    // Acces by repository
    const users = await this.rocketMembersRepository.getAllUsers();

    return users;
  }

  @Post('/create')
  async createUser(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    // Acces by repository
    const user = await this.rocketMembersRepository.create(name, memberFunction);

    return user;
  }
}
