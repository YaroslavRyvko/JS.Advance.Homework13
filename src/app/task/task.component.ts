import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() childarray: Array<any>;
  @Output() fromChild: EventEmitter<number> = new EventEmitter;
  saveTask: string;
  indexEdit: number;
  validSave: boolean;
  constructor() { }
  ngOnInit(): void {
  }
  checkstatus(index: number): void {
    if (this.childarray[index].checkStatus == true) {
      this.childarray[index].checkStatus = false;
    }
    else {
      this.childarray[index].checkStatus = true;
    }
  }
  deleteTask(index: number): void {
    this.childarray.splice(index, 1);
    this.fromChild.emit(this.childarray.length);
  }
  editTask(index: number): void {
    this.saveTask = this.childarray[index].finalName;
    this.indexEdit = index;
    this.validSave = true;
  }
  saveValieTask(): void {
    this.childarray[this.indexEdit].finalName = this.saveTask;
    this.validSave = false;
  }
}
