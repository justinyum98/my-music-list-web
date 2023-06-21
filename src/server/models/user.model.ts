import { Entity } from './entity.model';

export type User = Entity & {
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
};
