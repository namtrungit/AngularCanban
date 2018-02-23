import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `<h3 *ngIf="showLineIf">this ngIf directive line.</h3>
    <div [ngSwitch] = "color">
        <p *ngSwitchCase="'red'">this is color is red</p>
        <p *ngSwitchCase="'blue'">this is color is blue</p>
        <p *ngSwitchCase="'green'">this is color is green</p>
        <p *ngSwitchDefault>invalid color</p>
    </div>
    <ul>
        <li *ngFor = "let cl of colors">
            {{cl}}
        </li>
    </ul>
    `,
})
export class TutorialComponent {
    public showLineIf = true; // *ngIf True thì hiển thị thẻ h3 và ngược lại
    public color = 'abc'; // [ngSwitch]
    public colors: string[] = ['red', 'blue', 'green']; // *ngFor
}
