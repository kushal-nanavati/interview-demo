import { ApplicationConfig } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'tasks-list', pathMatch: 'full' },
      { path: 'tasks-list', component: TasksListComponent, children: [        
          { path: 'task-detail/:id', component: TaskDetailComponent }
      ] },
      // { path: 'tasks-list', component: TasksListComponent },
      // { path: 'task-detail/:id', component: TaskDetailComponent },
      { path: 'add-tasks', component: AddTasksComponent }      
    ]),
  ],
};
