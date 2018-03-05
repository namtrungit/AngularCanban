import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employees: any[];
  public pages: number[];
  public currentPage: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private empLoyeeService: EmployeeService) {

  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.currentPage = param['pageNumber'] || 1; // Nếu nó null thì sẽ là 1
      console.log(this.currentPage);
      console.log(param['filter']);
    });
    this.loadEm();
    this.pages = [1, 2, 3, 4, 5];
  }
  loadEm() {
    this.empLoyeeService.getList().subscribe((response: any) => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }
  delEm(id: number) {
    const comfirm = confirm('Are you sure?');
    if (comfirm) {
      this.empLoyeeService.delEm(id).subscribe(res => {
        if (res) {
          alert('Xóa thành công');
          this.loadEm();
        }
      });
    }
  }

}
