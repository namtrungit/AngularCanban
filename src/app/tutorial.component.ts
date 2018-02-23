import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `<h2>{{title}}</h2>
    <input type="text" [(ngModel)] = "fname"/>
    <input type="text" [(ngModel)] = "lname"/>
    <br/>
    full name: {{lname}} {{fname}}
    `,
    // styleUrls: ['./app.component.css'],
    styles: [`.greenColor{
        color:green;
    }`],
})
export class TutorialComponent {
    public title = 'Bùi Nam Trung';

}
