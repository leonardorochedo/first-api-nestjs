export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<any>;

  abstract getAllUsers(): Promise<any[]>;
}