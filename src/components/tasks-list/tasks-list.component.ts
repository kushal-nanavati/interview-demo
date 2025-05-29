import { Component, OnInit, Signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/tasks.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  providers: [TasksService],
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Tasks[] | undefined> = this.taskService.getAllTasks();
  todos: Signal<Tasks[] | undefined> = toSignal(this.tasks$);
  constructor(private taskService: TasksService, private router: Router) {}

  ngOnInit() {}

  fetchDetails(id: number): void {
    this.router.navigate(['/task-detail', id]);
  }

  addTasks(): void {
    this.router.navigate(['/add-tasks']);
  }
}
