import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks.interface';
import { Todos } from '../models/todos.interface';
import { map, mergeMap, Observable, take, toArray } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Todos>('https://dummyjson.com/todos').pipe(
      map((res) => res.todos),
      mergeMap((res) => res),
      take(5),
      toArray()
    );
  }

  getTask(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`https://dummyjson.com/todos/${id}`);
  }
}
