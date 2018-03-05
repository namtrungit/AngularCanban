import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  public id: number;
  public subscription: Subscription;
  public employee: any;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    public employeeService: EmployeeService
  ) { }
  ngOnInit() {
    this.subscription = this.activatedroute.params.subscribe(param => {
      this.id = param['id'];
    });
    this.employeeService.getEm(this.id).subscribe((data) => {
      this.employee = data;
      console.log(this.employee);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  saveForm() {
    this.employeeService.editEm(this.id, this.employee).subscribe(res => {
      if (res) {
        alert('Success');
      }
      this.router.navigate(['employee']);
    });
  }
}
