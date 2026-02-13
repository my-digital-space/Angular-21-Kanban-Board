import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kanban-board-challenge');

  // bound to input
  newTask: string = '';

  // kanban lists
  todoTasks: string[] = [];
  inProgressTasks: string[] = [];
  doneTasks: string[] = [];

  // add task → default to To Do
  addTask(): void {

  }

  /* ---------------------------
     NEW: MOVE FORWARD
     Todo -> Progress -> Done
  --------------------------- */
  moveForward(task: string, current: string[], next: string[]): void {

  }

  /* ---------------------------
     NEW: MOVE BACKWARD
  --------------------------- */
  moveBackward(task: string, current: string[], previous: string[]): void {

  }

  /* ---------------------------
     NEW: DELETE
  --------------------------- */
  deleteTask(task: string, list: string[]): void {

  }

  /* ---------------------------
     Helper remove
  --------------------------- */
  private removeFromArray(task: string, arr: string[]) {
    const index = arr.indexOf(task);
    if (index > -1) arr.splice(index, 1);
  }

}
