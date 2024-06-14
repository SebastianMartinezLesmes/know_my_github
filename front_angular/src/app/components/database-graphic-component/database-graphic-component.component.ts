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
            label: 'Lenguajes',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(28, 146, 214, 0.39)',
              'rgba(54, 235, 69, 0.33)',
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
