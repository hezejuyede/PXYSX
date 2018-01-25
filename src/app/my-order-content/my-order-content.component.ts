import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-order-content',
  templateUrl: './my-order-content.component.html',
  styleUrls: ['./my-order-content.component.scss']
})
export class MyOrderContentComponent implements OnInit {
  productTitle: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
  }

}
