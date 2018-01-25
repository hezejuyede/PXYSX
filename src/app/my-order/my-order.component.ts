import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  isAllSelect: boolean = false;
  private products: Array<Product>;
  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product("iconfont icon-weifukuan", "待付款"),
      new Product("iconfont icon-fukuan1", "已付款"),
      new Product("iconfont icon-dengdai-copy", "待发货"),
      new Product("iconfont icon-shouhuo", "已发货"),
      new Product("iconfont icon-yijingguanbi", "已关闭"),
      new Product("iconfont icon-tuihuotuikuan", "待退款"),
      new Product("iconfont icon-ccgl-tuihuosunyi-7", "已经退款/退货"),
      new Product("iconfont icon-chulizhong", "待商家确认"),
      new Product("iconfont icon-pingjia-copy", "待评价"),
      new Product("iconfont icon-quxiaodingdan", "已评价")
    ];
  }

  myOrder(event: any) {
    alert('click');
  }





}


export class Product {
  constructor(public icon: string,
              public title: string) {
  }
}


