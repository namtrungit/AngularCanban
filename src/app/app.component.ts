import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Trung';
  public isLoggedin: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  logOut() {
    this.loginService.setLogin(false);
    this.router.navigate(['home']);
  }
  ngOnInit() {
    this.isLoggedin = this.loginService.isLogged();
  }
}
