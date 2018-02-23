import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `
    <p>
    Child Component: {{name}}
    </p>
    <button [disabled] = "voted" (click)="vote(true)">Agree</button>
    <button [disabled] = "voted" (click)="vote(false)">Disagree</button>
    Result: {{voted}}
    `,
})
export class TutorialComponent {
    @Input() name: string;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onVote = new EventEmitter<boolean>();
    public voted = false;
    vote(agree: boolean) {
        this.voted = true;
        this.onVote.emit(agree);
    }
}
