import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  goToEmployee() {
    this.router.navigate(['employee']);
    // Chức năng này phục vụ cho việc trả về 1 trang nào đó khi nhấn vào 1 button
  }

}
