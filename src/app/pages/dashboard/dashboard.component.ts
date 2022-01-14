import { Component, OnInit } from '@angular/core';
import { Color} from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
  }

  single!: any[];
  multi!: any[];

  view: any[number] = [850, 385];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme:any = {
    domain: ['#ffd333', '#ffd333', '#ffd333']
  };

  constructor() {
    Object.assign(this, {single} )
  }

  onSelect(event:any) {
    console.log(event);
  }
}

