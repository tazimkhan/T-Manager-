import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task:Task[];
  constructor(private webReqService: WebRequestService) { }
  
  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }
  createTask(title: string,listId:string) {
    // We want to send a web request to create a list
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  getList(){
    return this.webReqService.get('lists');
  } 

  getTask(listId:string){
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed});
  }


  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }
  
}
 