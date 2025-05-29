import { ApplicationConfig } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: '/tasks-list', pathMatch: 'full' },
      { path: 'tasks-list', component: TasksListComponent },
      { path: 'task-detail/:id', component: TaskDetailComponent },
    ]),
  ],
};
