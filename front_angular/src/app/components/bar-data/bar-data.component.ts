import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-data',
  templateUrl: './bar-data.component.html',
  styleUrls: ['./bar-data.component.scss']
})
export class BarDataComponent implements OnInit {

  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chartOptions = {
      title: {
        text: 'Bar Chart Example',
        subtext: 'ECharts Example',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'value' // Eje X es ahora de tipo 'value' para barras horizontales
      },
      yAxis: {
        type: 'category', // Eje Y es ahora de tipo 'category'
        data: ['Apples', 'Bananas', 'Pears', 'Oranges', 'Grapes']
      },
      series: [{
        name: 'Fruits',
        type: 'bar',
        data: [5, 20, 46, 10, 10]
      }]
    };
  }
}
