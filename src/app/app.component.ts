import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Employee } from './Models/Employee';
import { APIService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employee: Employee = undefined;

  constructor(private APIService:APIService) { }

  ngOnInit(): void{
    if (this.employee == null) {
      
    } else {
      
    }
  }

  preventDefault() {
    event.preventDefault();
  }

  onClick(event: Event) {
    event.preventDefault();
  }

  checkForLoginValue() {
    if (this.employee != null) {
      return true;
    } else {
      return false;
    }
  }


  onSubmit(data) {
    console.log("Username: " + data.username + " Password: " + data.passwd);

    this.employee.username = data.username;
    this.employee.password = data.password;


  }
}