import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // property binding
  public title = 'Trung';
  public city = [{ id: 1, name: 'TPHCM' },
  { id: 2, name: 'Hà Nội' }
];
  onSubmit(value: any) {
    console.log(value);
  }
}
