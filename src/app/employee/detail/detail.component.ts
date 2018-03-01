import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
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
      alert(this.id);
    });
    this.employeeService.getEm(this.id).subscribe((data) => {
      this.employee = data;
      console.log(this.employee);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
