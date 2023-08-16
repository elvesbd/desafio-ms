import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/modules/users/models/user';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel implements User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
