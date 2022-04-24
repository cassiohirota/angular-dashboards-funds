import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
import { DividendDTO } from '../models/dividendDTO';

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

    const data = {
      labels: ['January','February','March','April','May','6','7','8','9','10','11','12'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: this.dividendosGrafico.map(e=>e.dividendoMesAtual),
      }]
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
  
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options
    }
  
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
  
    this.graf = new Chart(chartItem, config)
    
  }


}
