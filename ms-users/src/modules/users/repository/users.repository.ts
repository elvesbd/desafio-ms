import { CreateUserDto, UserResponseDto } from '../dto';

export interface UsersRepository {
  create(user: CreateUserDto): Promise<UserResponseDto>;
}
