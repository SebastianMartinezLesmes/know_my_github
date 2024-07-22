import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import * as worldGeoJSON from '../../../assets/maps/world.json'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: true }) rendererContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const ROOT_PATH = 'https://echarts.apache.org/examples'; // Define ROOT_PATH aquí
    type EChartsOption = echarts.EChartsOption;

    const chartDom = this.rendererContainer.nativeElement;
    const myChart = echarts.init(chartDom, 'dark');
    let option: EChartsOption;

    const CHUNK_COUNT = 32;
    let dataCount = 0;

    // Registrar el mapa 'world' con ECharts
    echarts.registerMap('world', worldGeoJSON as any);

    const fetchData = (idx: number) => {
      if (idx >= CHUNK_COUNT) {
        return;
      }
      const dataURL = `${ROOT_PATH}/data/asset/data/links-ny/links_ny_${idx}.bin`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', dataURL, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function () {
        if (xhr.status === 200) {
          const rawData = new Float32Array(xhr.response);
          const data = new Float64Array(rawData.length - 2);
          const offsetX = rawData[0];
          const offsetY = rawData[1];
          let off = 0;
          let addedDataCount = 0;
          for (let i = 2; i < rawData.length; ) {
            const count = rawData[i++];
            data[off++] = count;
            for (let k = 0; k < count; k++) {
              const x = rawData[i++] + offsetX;
              const y = rawData[i++] + offsetY;
              data[off++] = x;
              data[off++] = y;
              addedDataCount++;
            }
          }

          myChart.appendData({
            seriesIndex: 0,
            data: data,
          });

          dataCount += addedDataCount;
          fetchData(idx + 1);
        } else {
          console.error('Failed to load data:', xhr.statusText);
        }
      };

      xhr.onerror = function () {
        console.error('Network error occurred fetching data.');
      };

      xhr.send();
    };

    option = {
      progressive: 20000,
      backgroundColor: '#111',
      geo: {
        center: [-74.04327099998152, 40.86737600240287],
        zoom: 1,
        map: 'world',
        roam: true,
        silent: true,
        itemStyle: {
          color: 'transparent',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
        },
      },
      series: [
        {
          type: 'lines',
          coordinateSystem: 'geo',
          blendMode: 'lighter',
          dimensions: ['value'],
          data: [],
          polyline: true,
          large: true,
          lineStyle: {
            color: 'orange',
            width: 0.5,
            opacity: 0.3,
          },
        },
      ],
    };

    fetchData(0);
    option && myChart.setOption(option);
  }
}
