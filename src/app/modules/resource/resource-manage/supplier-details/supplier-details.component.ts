import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SupplierDetailsComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
