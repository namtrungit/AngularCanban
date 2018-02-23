import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `<h2>{{title}}</h2>
    <input type="text" #name/>
    <button (click)="clickName(name.value)">Click name</button>
    <button (click)="onClick()">Click me</button>
    <button (mouseover)="mouseOver()">MouseOver</button>
    `,
    // styleUrls: ['./app.component.css'],
    styles: [`.greenColor{
        color:green;
    }`],
})
export class TutorialComponent {
    public title = 'Bùi Nam Trung';
    onClick() {
        console.log('Click me');
    }
    mouseOver() {
        console.log('Mouse over');
    }
    clickName(value) {
        console.log(value);
    }
}
