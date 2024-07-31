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
        text: 'Ubicación: Bogotá, Colombia',
        textStyle: {
          color: 'white' // Cambia el color del texto aquí
        }
      },
      tooltip: {},
      series: [
        {
          type: 'map',
          map: 'colombia',
          itemStyle: {
            normal: {
              areaColor: '#cccccc', // Color por defecto para las áreas
              borderColor: '#111',  // Color del borde de las áreas
            },
            emphasis: {
              areaColor: '#ffcc00', // Color al pasar el mouse por encima
            },
          },
          regions: [
            {
              name: 'SANTAFE DE BOGOTA D.C',  // Nombre del departamento
              itemStyle: {
                normal: {
                  areaColor: '#ff0000',  // Color específico para Bogotá
                },
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);
  }
}
