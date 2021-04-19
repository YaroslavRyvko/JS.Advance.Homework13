import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string;
  finalName: string;
  checkStatus: boolean;
  count: number = 0;
  tasks: Array<ITask> = [];
  addTask(): void {
    this.finalName = this.taskName;
    const task: ITask = {
      finalName: this.finalName,
      checkStatus: false,
    }
    this.tasks.push(task);
    this.taskName = '';
    this.count = this.tasks.length
  }
  getValue(message: number): void {
    this.count = message;
  }
}
interface ITask {
  finalName: string,
  checkStatus: boolean
}