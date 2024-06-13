import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as Highcharts from 'highcharts';
import HC_line from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userInfo: any;
  Highcharts: typeof Highcharts = Highcharts;
  barChartOptions: Highcharts.Options = {
    series: [{
      data: [7, 18, 16, 14, 10,6,21], // replace with your data
      type: 'line'
    }],
    title: {
      text: 'My chart'
    },
    plotOptions: {
      line: {
        linecap: 'round'
      }
    }
  };

  constructor() { }
  
  
}
