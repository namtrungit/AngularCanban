import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `<h2 [style.color]="blueColor?'blue':'yellow'">Bùi Nam Trung</h2>
    <h3 [class.greenColor] ="applyClass">Học hutech</h3>
    `,
    // styleUrls: ['./app.component.css'],
    styles: [`.greenColor{
        color:green;
    }`],
})
export class TutorialComponent {
    public applyClass = true; // True thì class này sẽ dc áp dụng và ngược lại
    public blueColor = false; // True thì sẽ là blue còn false thì sẽ là yellow
}
