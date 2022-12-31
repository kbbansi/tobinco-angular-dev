import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from './chart-config/ChartOptions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.createChart()
  }

  ngOnInit(): void {}

  createChart() {
    this.chartOptions = {
      series: [],
      
      chart: {
        type: "bar",
        height: 515
      },

      title: {
        text: "TOP DAILY MEDICAL SESSIONS BY MEDICAL REPS"
      },

      subtitle: {
        text: " Top Daily Medical Sessions Today"
      },
      
      xaxis: {
        categories: []
      }
    }
  }

}
