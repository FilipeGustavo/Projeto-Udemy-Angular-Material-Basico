import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.scss']
})
export class NgForFormComponent implements OnInit {

name = '';
address = '';
phone = '';
city = '';
age = 0;

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
