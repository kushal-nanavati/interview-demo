import { AbstractControl } from "@angular/forms";

export interface TasksControl {
    taskName: AbstractControl<string | null>;
    taskDescription: AbstractControl<string | null>;
    completionStatus: AbstractControl<boolean | null>;
} 