import { ChangeDetectionStrategy, Component, Injector, OnInit, Signal, effect } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/tasks.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  providers: [TasksService],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit {
  tasks$!: Observable<Tasks[] | undefined>;
  todos!: Signal<Tasks[] | undefined>;  
  constructor(private taskService: TasksService, private router: Router, private injector: Injector, private route: ActivatedRoute) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getAllTasks();
    this.todos = toSignal(this.tasks$, { injector: this.injector });    
  }

  fetchDetails(id: number): void {
    this.router.navigate(['task-detail', id], { relativeTo: this.route });
  }

  addTasks(): void {
    this.router.navigate(['/add-tasks']);
  }
}
