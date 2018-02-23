import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `
    <div>
    <p [ngClass]="{classOne:cOne,classTwo:cTwo}">This is ngClass apply style</p>
    <button (click)="changeColor()">Đổi màu</button>
    </div>
    <p [ngStyle]="{'font-style':style,'font-size':size}">This paragraph will be apply to ngStyle</p>
    `,
    styles: [`
        .classOne {color: white}
        .classTwo {background-color:black}
    `]
})
export class TutorialComponent {
    // ngClass
    public cOne = true;
    public cTwo = true;
    // ngStyle ít dùng
    public style = 'italic';
    public size = '30px';
    changeColor() {
        this.cOne = !this.cOne;
        this.cTwo = !this.cTwo;
    }
}
