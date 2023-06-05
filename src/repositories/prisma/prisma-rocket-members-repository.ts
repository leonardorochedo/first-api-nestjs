import { randomUUID } from 'node:crypto';
import { PrismaService } from "src/database/prisma.service";
import { RocketMembersRepository } from "../rocket-members-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<any> {
        // Acces by prisma
        const user = await this.prisma.rocketTeamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction,
            },
        });

        return user;
    }

    async getAllUsers(): Promise<any[]> {
        // Acces by prisma
        const users = await this.prisma.rocketTeamMember.findMany();

        return users;
    }
}