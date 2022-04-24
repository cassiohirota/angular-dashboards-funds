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
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem

    this.graf = new Chart(chartItem, config)
    
  }


}
