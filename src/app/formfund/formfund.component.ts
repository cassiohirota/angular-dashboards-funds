import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DividendDTO } from '../models/dividendDTO';
import { FundDividendService } from '../services/fund-dividend.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-formfund',
  templateUrl: './formfund.component.html',
  styleUrls: ['./formfund.component.css']
})
export class FormfundComponent implements OnInit, OnChanges {

  digitado: string = '';
  dividendos: Array<DividendDTO> = [];
 
  pegaValor(evento: KeyboardEvent){
    this.digitado = (<HTMLInputElement>evento.target).value;
  }
  
  apresentaValor(){
    this.fundService.periodoEmAnos = this.digitado;
    this.fundService.getDividendData().subscribe((dividendo)=> this.dividendos =dividendo);   
  }

  constructor(private fundService: FundDividendService) { }

  ngOnInit(): void {
     
  }
  
  ngOnChanges(): void {
    
  }
 
}
