import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
import { DividendDTO } from '../models/dividendDTO';
import { CHART_COLORS, months, numbers, transparentize } from '../Util/util';

@Component({
  selector: 'app-graf-dividend10',
  templateUrl: './graf-dividend10.component.html',
  styleUrls: ['./graf-dividend10.component.css']
})
export class GrafDividend10Component implements OnInit, OnChanges  {

  @Input() dividendosGrafico: Array<DividendDTO> = [];
  graf: any ;

  graf2: any ;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.graf != null){
      this.deletaGrafico();
    }
    if(this.dividendosGrafico != null && this.dividendosGrafico.length > 0){
      console.log("entrou no dividendo" + this.dividendosGrafico)
      this.createChart();
    }
  }

  ngOnInit(): void {
    
  }

  deletaGrafico(){
    this.graf.destroy();
  }
  
  createChart(): void {
    Chart.register(...registerables);

  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
  
    const DATA_COUNT = 12;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const data = {
      labels: this.dividendosGrafico.map(e=>e.mesAtual),
      datasets: [
        {
          label: 'Quantidade mes atual',
          data: this.dividendosGrafico.map(e=>e.quantMesAtual),
          fill: false,
          borderColor: CHART_COLORS.red,
          backgroundColor: transparentize(CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dividendo mes atual',
          data: this.dividendosGrafico.map(e=>e.dividendoMesAtual),
          fill: false,
          borderColor: CHART_COLORS.blue,
          backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
        }
      ]
    };
    const config: ChartConfiguration   ={
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Dividendos'
          }
        },
        scales: {
          x: {
            ticks: {
              // For a category axis, the val is the index so the lookup via getLabelForValue is needed
              callback: function(val: any, index) {
                // Hide every 2nd tick label
                return index % 2 === 0 ? this.getLabelForValue(val) : '';
              },
              color: 'red',
            }
          }
        }
      },
    };

    const DATA_COUNT2 = 7;
    const NUMBER_CFG2 = {count: DATA_COUNT, min: 0, max: 100};

    const labels = months({count: 7});
    const dataB = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 3, 74, 101],
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
      stack: 'combined',
      type: 'bar'
    },
    {
      label: 'Dataset 2',
      data: [2, 43, 55, 310],
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
      stack: 'combined'
    }
  ]
};
    const config2: ChartConfiguration = {
      type: 'line',
      data: dataB,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Stacked Line/Bar Chart'
          }
        },
        scales: {
          y: {
            stacked: true
          }
        }
      },
    };

    

    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
    const chartItem2: ChartItem = document.getElementById('my-chart2') as ChartItem

    this.graf = new Chart(chartItem, config)
    this.graf2 = new Chart(chartItem2, config2)

    
  }

  

}
