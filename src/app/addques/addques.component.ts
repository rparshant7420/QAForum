import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addques',
  templateUrl: './addques.component.html',
  styleUrls: ['./addques.component.css']
})
export class AddquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  foods: Food[] = [
    {value: 'sports', viewValue: 'sports'},
    {value: 'Mathematics', viewValue: 'Mathematics'},
    {value: 'Music', viewValue: 'Music'},
    {value: 'Fashion and style', viewValue: 'Fashion and style'},
    {value: 'Food', viewValue: 'Food'},
    {value: 'Other..', viewValue: 'Other..'},
  ];
}
