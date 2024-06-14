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
          labels: ['Python', 'JavaScript', 'PHP', 'Express', 'FastAPI'], 
          datasets: [{
            label: 'Años de experiencia',
            data: [1.5, 1, 0.3, 1, 1],
            backgroundColor: [
              'rgba(226, 223, 63, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(121, 121, 121, 0.2)',
              'rgba(0, 145,131, 0.2)', 
            ],
            borderColor: [
              'rgb(226, 223, 63)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgb(187, 181, 181)',
              'rgb(0, 145,131)',
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
