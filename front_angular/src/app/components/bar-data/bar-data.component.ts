import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-data',
  templateUrl: './bar-data.component.html',
  styleUrls: ['./bar-data.component.scss']
})
export class BarDataComponent implements OnInit {

  @Input() contributors: any[] = []; 
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
      // title: {
      //   text: 'Contributions by Contributors',
      //   subtext: 'Tap the bar to get more information',
      //   left: 'center'
      // },
      tooltip: {},
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: names,
        axisLabel: {
          rotate: 45 // Gira las etiquetas 45 grados. Puedes ajustar el valor.
        }
      },
      series: [{
        name: 'Contributions',
        type: 'bar',
        data: data,
        label: {
          show: true,          // Muestra las etiquetas
          position: 'right',   // Posiciona las etiquetas a la derecha de las barras
          formatter: '{c}'     // Muestra el valor de la barra (c es el valor)
        }
      }]
    };
  }  
}
