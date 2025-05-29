import { Tasks } from './tasks.interface';

export interface Todos {
  limit: number;
  skip: number;
  todos: Tasks[];
  total: number;
}
