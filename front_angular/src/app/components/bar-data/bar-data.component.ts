import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-data',
  templateUrl: './bar-data.component.html',
  styleUrls: ['./bar-data.component.scss']
})
export class BarDataComponent implements OnInit {

  @Input() contributors: any[] = []; // Recibe los datos de los contribuidores
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  ngOnChanges(): void {
    this.initChart(); // Vuelve a inicializar el gráfico si cambian los datos
  }

  initChart(): void {
    const names = this.contributors.map(con => con.login);
    const data = this.contributors.map(con => con.contributions);

    this.chartOptions = {
      title: {
        text: 'Contributions by Contributors',
        subtext: 'ECharts Example',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: names
      },
      series: [{
        name: 'Contributions',
        type: 'bar',
        data: data
      }]
    };
  }
}
