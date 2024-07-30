import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts';
import * as colombiaGeoJSON from '../../../assets/maps/colombia.json'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Asegúrate de que Angular haya terminado de renderizar
    this.cdr.detectChanges();
    
    // Retrasa la inicialización del gráfico
    setTimeout(() => {
      this.initChart();
    }, 0);
  }

  initChart(): void {
    const chartDom = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartDom);

    // Registrar el mapa de Colombia con ECharts
    echarts.registerMap('colombia', colombiaGeoJSON as any);

    const option = {
      title: {
        text: 'Mapa de Colombia',
        textStyle: {
          color: 'white' // Cambia el color del texto aquí
        }
      },
      tooltip: {},
      series: [
        {
          type: 'map',
          map: 'colombia'
        }
      ]
    };

    myChart.setOption(option);
  }
}
