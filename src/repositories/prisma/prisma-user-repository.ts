import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  
  async create(name: string, memberFunction: string): Promise<any> {
    // Acces User model prisma
    const user = await this.prisma.user.create({
      data: {
        name,
        function: memberFunction,
      },
    });

    return user;
  }

  async getAllUsers(): Promise<any[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getUserById(id: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { id: parseInt(id) } });

    return user;
  }

}
