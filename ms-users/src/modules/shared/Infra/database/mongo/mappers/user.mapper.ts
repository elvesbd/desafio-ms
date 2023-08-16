import { User } from '../schemas';
import { UserResponseDto } from 'src/modules/users/dto';

export class UserMapper {
  public static toDTo(user: User): UserResponseDto {
    const userResponseDto: UserResponseDto = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      phone: user.phone,
      age: user.age,
    };
    return userResponseDto;
  }
}
