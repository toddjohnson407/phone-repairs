import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit {

  testPhoneModels: any[] = ['iPhone 11', 'iPhone 11 Max', 'iPhone X', 'iPhone X Max', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone XR Max', 'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7'];
  
  selectedModelIndex: any;

  constructor() { }

  ngOnInit() {
  }

  /** Selects phone model */
  selectModel(index: number) {
    this.selectedModelIndex = index;
  }

}
