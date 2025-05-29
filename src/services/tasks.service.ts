import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks.interface';
import { Todos } from '../models/todos.interface';
import { map, mergeMap, Observable, take, toArray } from 'rxjs';

@Injectable()
export class TasksService {
  taskNames: string[] = ['Me time', 'Study', 'Entertainment', 'Documentary', 'Finance'];
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Todos>('https://dummyjson.com/todos').pipe(
      map((res) => res.todos.map((todo, index) => ({ ...todo, taskName: this.taskNames[index] }))),
      mergeMap((res) => res),
      take(5),
      toArray()
    );
  }

  getTask(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`https://dummyjson.com/todos/${id}`);
  }
}
