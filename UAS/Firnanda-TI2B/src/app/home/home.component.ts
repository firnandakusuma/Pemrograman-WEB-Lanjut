import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

 submit(form){
   console.log(form.password);
   if(form.username == 'firnanda' && form.password == '123'){
     this.router.navigate(['/friend'])
   }
 }

}
