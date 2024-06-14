import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-database-graphic-component',
  templateUrl: './database-graphic-component.component.html',
  styleUrls: ['./database-graphic-component.component.scss'],
})
export class DatabaseGraphicComponentComponent implements AfterViewInit {
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
          labels: ['MySQL', 'MongoDB',],
          datasets: [{
            label: 'Años de experiencia',
            data: [1.5, 2,],
            backgroundColor: [
              'rgba(0, 153, 255, 0.2)',
              'rgba(30, 255, 0, 0.2)',
            ],
            borderColor: [
              'rgb(0, 153, 255)',
              'rgb(30, 255, 0)',
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
