import { User } from '../entity/user';

export interface UsersRepository {
  create(user: User): Promise<User>;
}
