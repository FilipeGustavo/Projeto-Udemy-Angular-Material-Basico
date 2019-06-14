import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})

export class EventBindingComponent implements OnInit {
  name = 'Filipe';

buttonName = 'My Button';
i = 0;
spinnerMode = 'determinate';
btnEnable = true;
selectDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Clicou no botão save.');
  }

  firstButton() {
    this.i ++;
    this.buttonName = 'It was clicked ' + this.i + ' times';
  }

  disabled() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 2000);
  }

  cbChange(event) {
    this.selectDisabled = event.checked;
    if (event.checked === false) {
      console.log('Não Selecionado');
    } else {
      console.log('Selecionado');
    }

  }

  inputEvent(event) {
    console.log(event.target.value);
  }

}
