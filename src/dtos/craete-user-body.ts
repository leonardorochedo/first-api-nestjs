import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'The member name should not be empty',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty',
  })
  function: string;
}
