import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'The member name should not be empty',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The member description should not be empty',
  })
  description: string;
}

export class User {
  id?: number;
  name: string;
  description: string;

  constructor(name: string, description: string, id?: number) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}