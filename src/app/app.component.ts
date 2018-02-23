import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h4>Học hutech</h4>',
  styles: ['h4 {color:blue}'],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // property binding
  public title = 'Trung';
  onSubmit(value: any) {
    console.log(value);
  }
}
