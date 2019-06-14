import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  names = [
    'Filipe',
    'Gustavo'
  ];

  cities = [
    { name: 'São Paulo', state: 'SP' },
    { name: 'Goias', state: 'GO' },
    { name: 'Rio de Janeiro', state: 'RJ' },
    { name: 'Minas Gerais', state: 'MG' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
