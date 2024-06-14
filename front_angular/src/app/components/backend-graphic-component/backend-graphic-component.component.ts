import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-backend-graphic-component',
  templateUrl: './backend-graphic-component.component.html',
  styleUrls: ['./backend-graphic-component.component.scss'],
})
export class BackendGraphicComponentComponent implements AfterViewInit {
  @ViewChild('barCanvas', { static: false }) barCanvas!: ElementRef<HTMLCanvasElement>;

  barChart: Chart | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = this.barCanvas.nativeElement.getContext('2d');
    if (ctx) {
      const config: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels: ['Python', 'javaScript', 'PHP'],
          datasets: [{
            label: 'Lenguajes',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(235, 209, 97, 0.39)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgb(217, 255, 0)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      this.barChart = new Chart(ctx, config);
    }
  }
}
