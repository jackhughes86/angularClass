import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  buttonContent = 'Hello'; 
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if(this.buttonContent === 'Hello') {
      this.buttonContent = 'World';
    } else {
      this.buttonContent = 'Hello';
    }
  }


}
