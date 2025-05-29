import {
  Component,
  effect,
  Injector,
  OnInit,
  Signal,  
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/tasks.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  standalone: true,
  providers: [TasksService],
})
export class TaskDetailComponent implements OnInit {
  task!: Signal<Tasks | undefined>;
  todos$!: Observable<Tasks | undefined>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TasksService,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.todos$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.taskService.getTask(+params['id']);
      })
    );
    this.task = toSignal(this.todos$, {
      injector: this.injector,
    });    
    effect(() => {
      const taskValue = this.task();
      if(taskValue) {
        console.log(taskValue);
      }
    }, { injector: this.injector });
  }
}
