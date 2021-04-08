import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminUser } from './Models/AdminUser';

import { Employee } from './Models/Employee';
import { APIService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employee: Employee;
  adminUser: AdminUser;

  constructor(private apiservice:APIService) { }

  ngOnInit(): void{
    if (this.employee == null) {
      this.employee = new Employee;
    }
    if (this.adminUser == null) {
      this.adminUser = new AdminUser;
    }
  }

  preventDefault() {
    event.preventDefault();
  }

  onClick(event: Event) {
    event.preventDefault();
  }

  checkForLoginValue() {
    if (this.employee.id != null) {
      return true;
    } else {
      return false;
    }
  }


  onSubmit(data) {
    this.employee.username = data.username;
    this.employee.password = data.passwd;

    this.apiservice.authenticateEmployee(this.employee).subscribe(
      data => {this.adminUser = data}
    );

    console.log(this.adminUser);

    let t = this.apiservice.setJwtToken(this.adminUser.JwtToken);

    console.log(t);
  }
}