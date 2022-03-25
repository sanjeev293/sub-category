import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  subCategory:string[]=[''];

  choice:string[]=['steak','pizza','tacos'];
  pizza:string[] =['veg chesse','panner pizza','garlic pizza'];
  steak:string[]=['veg-steak','non-veg-steak'];
  Tacos:string[]=['veg-Tacos','non-Veg-Tacos'];
  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }
  updateFood(choice: any){
  switch(choice){
    case 'steak':
      this.subCategory =this.steak;
      break;
      case 'pizza':
        this.subCategory=this.pizza;
        break;
        case 'tacos':
        this.subCategory=this.Tacos;
        break;
  }
  }
}
