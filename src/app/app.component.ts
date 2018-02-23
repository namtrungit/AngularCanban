import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h4>Học hutech</h4>',
  styles: ['h4 {color:blue}'],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TRUNG';
  // property binding
  public image = 'http://media.tinthethao.com.vn/files/bongda/2017/09/27/nhung-ban-thang-mang-thuong-hieu-david-villa-215826jpg.jpg';
  public agree = 0;
  public disagree = 0;
  public names = ['Mr.A', 'Mr.B', 'Mr.C'];
  parentVote(agree: boolean) {
    // tslint:disable-next-line:curly
    if (agree) this.agree++;
    // tslint:disable-next-line:curly
    else this.disagree++;
  }
}
