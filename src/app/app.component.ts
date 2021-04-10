import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminUser } from './Models/AdminUser';

import { Employee } from './Models/Employee';
import { APIService } from './Services/api.service';

export type EditorType = 'loginNo' | 'LoginYes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editor: EditorType = 'loginNo';

  title: string = "Cinema API"

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

  get showLoginYesEditor() {
    return this.editor === 'LoginYes';
  }

  get showLoginNoEditor() {
    return this.editor === 'loginNo';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  preventDefault() {
    event.preventDefault();
  }

  onClick(event: Event) {
    event.preventDefault();
  }

  onSubmit(data) {
    this.employee.username = data.username;
    this.employee.password = data.passwd;

    this.apiservice.authenticateEmployee(this.employee).subscribe( (result) => {
      this.adminUser = result
      this.apiservice.setJwtToken(this.adminUser);
      this.toggleEditor('LoginYes');
    });
  }
}