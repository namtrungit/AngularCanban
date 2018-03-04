import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { DetailComponent } from '../employee/detail/detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<DetailComponent> {
    constructor(
    ) { }
    canDeactivate(component: DetailComponent) {
        alert('Bạn không thể rời khỏi trang này khi không sửa dữ liệu');
        return false;
    }
}
