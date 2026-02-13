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
    const value = this.newTask.trim();

    if (!value) return;

    this.todoTasks.push(value);
    this.newTask = '';
  }

  /* ---------------------------
     NEW: MOVE FORWARD
     Todo -> Progress -> Done
  --------------------------- */
  moveForward(task: string, current: string[], next: string[]): void {
    this.removeFromArray(task, current);
    next.push(task);
  }

  /* ---------------------------
     NEW: MOVE BACKWARD
  --------------------------- */
  moveBackward(task: string, current: string[], previous: string[]): void {
    this.removeFromArray(task, current);
    previous.push(task);
  }

  /* ---------------------------
     NEW: DELETE
  --------------------------- */
  deleteTask(task: string, list: string[]): void {
    this.removeFromArray(task, list);
  }

  /* ---------------------------
     Helper remove
  --------------------------- */
  private removeFromArray(task: string, arr: string[]) {
    const index = arr.indexOf(task);
    if (index > -1) arr.splice(index, 1);
  }

}
