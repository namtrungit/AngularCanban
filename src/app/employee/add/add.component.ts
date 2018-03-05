import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public id: number;
  public subscription: Subscription;
  public employee: any;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = {};
  }
  addForm() {
    this.employeeService.addEm(this.employee).subscribe(res => {
      if (res) {
        alert('Add employee success!');
        this.router.navigate(['employee']);
      }
    });
  }
}
