import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  checkLogin(value: any) {
    // tslint:disable-next-line:curly
    if (value.username === 'admin' && value.password === '123') {
      this.loginService.setLogin(true);
      this.router.navigate(['/']);
    }
  }

}
