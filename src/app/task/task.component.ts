import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  title = '';
  comment = '';
  tasks: Task[] = [];

  onSubmit(){
    console.log(`Le nom de ma tache est :${this.title}`);
    console.log(`Le contenu de mon commentaire est :${this.comment}`);
    const task = new Task(this.tasks.length+1,this.title!, this.comment!,true);
    this.tasks.push(task)
  }

  close(id:number){
    let task = this.tasks.filter(item => item.id == id)[0];
    const index = this.tasks.indexOf(task);
    task.enabled = false;
    this.tasks[index] = task;
  }

}
