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
                subtext: 'in percentage',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {d}%'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Languages',
                    type: 'pie',
                    radius: '50%',
                    data: this.languages.map(lang => ({
                        value: parseFloat(lang.percentage),
                        name: lang.name
                    })),
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);
    }
}
