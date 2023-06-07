import { User } from "src/dtos/create-user-body";

export abstract class UserRepository {
  // Implementations of this interface / abstract class
  abstract create(name: string, description: string): Promise<User>;

  abstract getAllUsers(): Promise<User[]>;

  abstract getUserById(id: string): Promise<User>;

  abstract editUser(id: string, name: string, description: string): Promise<User>;

  abstract deleteUser(id: string): Promise<User>;
}