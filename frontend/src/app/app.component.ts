import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private  _authService: AuthService,private router:Router){}

 logout(){
   this._authService.logout();
 }

 goToList(){
   if(this._authService.loggedIn()){
     this.router.navigate(['/lists'])
   }else{
     this.router.navigate(['/login'])
   }
 }

}
