import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  title = '';
  newTaskTitle: string = '';

  tasks: Array<Task> = [];

  addTask(){
    console.log(this.newTaskTitle);
    if(!this.newTaskTitle)
      return;
    const newTask: Task = {
      title: this.newTaskTitle,
      complete: false
    };
    this.tasks.push(newTask);
    this.newTaskTitle = '';
    this.checkTask()
  }
  rmTask(index) {
    this.tasks.splice(index, 1);
    this.checkTask();
  }
  checkTask() {
    if(this.tasks.length === 0)
      this.title = '';
    else
      this.title = 'TODO list:';
  }
}
interface Task {
  title: string;
  complete: boolean;
}