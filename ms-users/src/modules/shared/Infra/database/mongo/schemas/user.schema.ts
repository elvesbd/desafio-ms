import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/modules/users/entity/user';

export type UserDocument = UserModel & Document;

@Schema({ collection: 'users' })
export class UserModel implements User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

export const userSchema = SchemaFactory.createForClass(UserModel);
