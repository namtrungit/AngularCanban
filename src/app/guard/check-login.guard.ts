import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(
        private loginService: LoginService
    ) {}
    canActivate() {
        const status = this.loginService.isLogged();
        if (status === false) {
            alert('Bạn không có quyền truy cập đường dẫn này');
        }
        return status;
    }
}
