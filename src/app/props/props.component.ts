import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {

  name: string;
  age: number;
  check: boolean;
  private _lastName: string;
  optionalArray?: [];

  get lastName(){
    return this._lastName;
  }

  constructor(name: string, age: number, check: boolean, lastName: string) {
    this.name = name;
    this.age = age;
    this.check = check;
    this._lastName = lastName;
   }

   printAll() {
     console.log(`${this.name} , ${this.age}, ${this.check}`);
   }

  ngOnInit() {
  }

}

const props = new PropsComponent('Uzair', 21, true, 'Hussain');
props.printAll();
