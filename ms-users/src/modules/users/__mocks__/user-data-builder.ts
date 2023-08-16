import { UserResponseDto } from '../dto';

export class UserDataBuilder {
  private userResponseDto: UserResponseDto = {
    id: 'b013f8f4-804e-4816-b799-46044d86816c',
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '85999481515',
    age: 40,
  };

  static aUser(): UserDataBuilder {
    return new UserDataBuilder();
  }

  build(): UserResponseDto {
    return this.userResponseDto;
  }
}
