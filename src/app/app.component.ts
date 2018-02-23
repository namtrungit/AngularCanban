import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h4>Học hutech</h4>',
  styles: ['h4 {color:blue}'],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello TRUNG'; // uppercase vs lowercase
  today = Date.now(); // date pipe
  // percent pipe
  percentA = 0.269;
  percentB = 1.3495;
  // Decimal Pipe
  numberA = 3.14;
  numberB = 2.1234567;
  // Slice pipe (cắt mảng)
  arrStudent = ['Trung', 'Tuấn', 'Vỹ', 'Thịnh'];
  // property binding
  public image = 'http://media.tinthethao.com.vn/files/bongda/2017/09/27/nhung-ban-thang-mang-thuong-hieu-david-villa-215826jpg.jpg';

}
