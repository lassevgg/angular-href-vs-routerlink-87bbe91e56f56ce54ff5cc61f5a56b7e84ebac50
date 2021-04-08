import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title: string = "Employee";

  EmployeeList: Employee[] = [];

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
    this.ApiService.getEmployeeList().subscribe(
      dataFromAPI => {this.EmployeeList = dataFromAPI}
    );
  }

  getEmployeeListOut():Employee[]{
    return this.EmployeeList;
  }

  

}
