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
    TaskManager.taskList = TaskManager.taskList.filter(
                            item => item.id !== id);
  }

  static CompleteTask(id,status){
   let obj = TaskManager.taskList.find(item => item.id === id);
   if(obj)
    obj.isCompleted = status;
   
  
    
  }
}

TaskManager.createTask(1,"play", "low", new Date(2016, 1, 11),true); 
TaskManager.createTask(2,"play", "low", new Date(2015, 1, 11),false); 
TaskManager.createTask(3,"play", "low", new Date(2014, 1, 11),false); 






TaskManager.printTasks();









