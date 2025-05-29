import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TasksControl } from '../../models/form-controls.interface';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent implements OnInit {

  tasks!: FormGroup;  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.tasks = this.formBuilder.group({
        todos: this.formBuilder.array([this.createTask()])
      });
  }

  private createTask(): FormGroup<TasksControl> {    
    return this.formBuilder.group<TasksControl>({
      taskName: new FormControl(''),
      taskDescription: new FormControl(''),
      completionStatus: new FormControl(false),
    });
  }

  get todos() {
    return this.tasks.get('todos') as FormArray;
  }

  public addTask(): void {
    const task: TasksControl = {
      taskName: new FormControl(''),
      taskDescription: new FormControl(''),
      completionStatus: new FormControl(true)
    };
    this.todos.push(task);
  }

}
