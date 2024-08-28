import {  compareAsc } from "date-fns";
import { Task } from "./Task.js ";

export class TaskManager {
  static taskList = [];

  static createTask(id,title, priority, dueDate, isCompleted) {
    const obj = new Task(id,title, priority, dueDate,isCompleted);
    TaskManager.taskList.push(obj);
  }

  static sortTasks() {
    TaskManager.taskList.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
  }

  static printTasks() {
    TaskManager.taskList.forEach(task => task.printTask());
  }

  static DeleteTask(id){
    TaskManager.taskList.splice(id);

  }
}

TaskManager.createTask(1,"play", "low", new Date(2016, 0, 11),"falsefds"); 
TaskManager.createTask(2,"play", "low", new Date(2015, 0, 11),true); 
TaskManager.createTask(3,"play", "low", new Date(2014, 0, 11),true); 


TaskManager.sortTasks();


TaskManager.printTasks();









