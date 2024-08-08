import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
    selector: 'app-circle-data',
    templateUrl: './circle-data.component.html',
    styleUrls: ['./circle-data.component.scss'],
})
export class CircleDataComponent implements OnInit, AfterViewInit {

    @Input() languages: { name: string, percentage: string }[] = [];

    constructor() { }

    ngOnInit() {}

    ngAfterViewInit() {
        this.initChart();
    }

    initChart() {
        const chartDom = document.getElementById('main')!;
        const myChart = echarts.init(chartDom);
        const option = {
            title: {
                text: 'Languages Usage',
                // subtext: 'Percentage of Code in Each Language',
                left: 'center',
                top: 'top',
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#333'
                },
                subtextStyle: {
                    fontSize: 14,
                    color: '#666'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {d}%'
            },
            legend: {
                orient: 'horizontal',
                left: 'center',
                bottom: '0',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            series: [
                {
                    name: 'Languages',
                    type: 'pie',
                    radius: ['40%', '70%'], // Inner and outer radius
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}',
                        fontSize: 14
                    },
                    labelLine: {
                        show: true
                    },
                    data: this.languages.map(lang => ({
                        value: parseFloat(lang.percentage),
                        name: lang.name
                    })),
                }
            ]
        };
        option && myChart.setOption(option);
    }
}
