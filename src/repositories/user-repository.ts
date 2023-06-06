export abstract class UserRepository {
  // Implementations of this interface / abstract class
  abstract create(name: string, memberFunction: string): Promise<any>;

  abstract getAllUsers(): Promise<any[]>;

  abstract getUserById(id: string): Promise<any>;
}