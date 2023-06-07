import { PrismaService } from '../../database/prisma.service';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';
import { User } from 'src/dtos/create-user-body';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  
  async create(name: string, description: string): Promise<User> {
    // Acces User model prisma
    const user = await this.prisma.user.create({
      data: {
        name,
        description,
      },
    });

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique(
    {
      where: { id: parseInt(id) }
    }
    );

    return user;
  }

  async editUser(id: string, name: string, description: string): Promise<User> {
    const user = await this.prisma.user.update(
    {
      where: { id: parseInt(id) },
      data: {
        name,
        description,
      },
    }
    );

    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete(
    {
      where: { id: parseInt(id) }
    }
    );

    return user;
  }

}
