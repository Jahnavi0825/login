import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inital';

  constructor(){
    const routes:Routes=[
      {path:"login", component:LoginComponent},
      {path:"news", component:NewsComponent}
    ]
  } 
}
