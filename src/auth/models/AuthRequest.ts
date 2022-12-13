import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

//? It contains the structure of an authorized request
//! Warning: may the version of the package can collide the use of a class or interface
//! In this case I'm using class but may it needs to change to interface
//! But be aware that interfaces doesn't exists on JS

export class AuthRequest extends Request {
  user: User;
}
