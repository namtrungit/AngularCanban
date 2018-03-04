import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public _isLoggedIn: boolean;
  constructor() { }
  isLogged(): boolean {
    return this._isLoggedIn;
  }
  setLogin(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }
}
