import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-frontend-graphic-component',
  templateUrl: './frontend-graphic-component.component.html',
  styleUrls: ['./frontend-graphic-component.component.scss'],
})
export class FrontendGraphicComponentComponent implements AfterViewInit {
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
          labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Vue'],
          datasets: [{
            label: 'Lenguajes',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(240, 113, 29, 0.39)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 145, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgb(255, 81, 0)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgb(0, 102, 255)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
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
