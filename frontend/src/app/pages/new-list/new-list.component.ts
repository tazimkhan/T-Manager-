import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router,private route:ActivatedRoute) { }

  list:List[];
  task:Task[];
  listId;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params.listId;
      }
    )
  }
  createList(title:string){
    this.taskService.createList(title).subscribe((list :List)=>{
      console.log(list);
      this.router.navigate(['/lists',list._id]);
    })
  }
  cancellist(){
      this.router.navigate(['/lists']);
    }
  
}
