import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {
  public parentrouterid: number;
  public sub: Subscription;
  constructor(
    private router: Router,
    private activedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activedroute.parent.params.subscribe(params => {
      this.parentrouterid = params['id'];
      alert('This is parent id:' + this.parentrouterid);
    });
  }
  ngOnDestroy() {

  }
}
