import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employees: any[];
  constructor(private empLoyeeService: EmployeeService) {

  }
  ngOnInit() {
    this.empLoyeeService.getList().subscribe((response: any) => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }
}
