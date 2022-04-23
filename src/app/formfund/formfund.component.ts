import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formfund',
  templateUrl: './formfund.component.html',
  styleUrls: ['./formfund.component.css']
})
export class FormfundComponent implements OnInit {

  digitado: string = '';

  pegaValor(evento: KeyboardEvent){
    this.digitado = (<HTMLInputElement>evento.target).value;
  }

  apresentaValor(){
    alert(this.digitado);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
