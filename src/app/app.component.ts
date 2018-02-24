import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // property binding
  public title = 'Trung';
  onSubmit(value: any) {
    console.log(value);
  }
}
