import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-circle-data',
  templateUrl: './circle-data.component.html',
  styleUrls: ['./circle-data.component.scss'],
})
export class CircleDataComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: 'Languages Usage',
        subtext: 'in percentage',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Languages',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'JavaScript' },
            { value: 735, name: 'HTML' },
            { value: 580, name: 'CSS' },
            { value: 484, name: 'TypeScript' },
            { value: 300, name: 'Other' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }
}
