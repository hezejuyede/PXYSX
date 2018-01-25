import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  isSmLogin: boolean = false;
  isAllSelectA: boolean = false;
  isGoodsPrice: number;
  goodsNumber = 3;
  AllPrice = 399;
  private ShoppingCart: Array<ShoppingCart>;

  constructor() {
  }

  ngOnInit() {
    this.ShoppingCart = [new ShoppingCart('http://www.ilqiqi.top/images/mYc/goods/crad/1.jpg', '【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.5两', 195, '尺码：400g 10-14只', 1), new ShoppingCart('http://www.ilqiqi.top/images/mYc/goods/crad/2.jpg', '【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.6两', 196, '尺码：400g 10-14只', 2), new ShoppingCart('http://www.ilqiqi.top/images/mYc/goods/crad/3.jpg', '【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.7两', 197, '尺码：400g 10-14只', 3), new ShoppingCart('http://www.ilqiqi.top/images/mYc/goods/crad/4.jpg', '【现货】今锦上 阳澄湖大闸蟹888型现货实物生鲜礼盒 公蟹3.8两', 198, '尺码：400g 10-14只', 4)
    ];
    this.isGoodsPrice = 399;
  }

  SGoods(index) {
    if (this.ShoppingCart[index].number > 1) {
      this.ShoppingCart[index].number--;
    }

  }

  AGoods(index) {
    const item = ShoppingCart[index]
    console.log(item);
  /* this.ShoppingCart[index].number++;*/
  }

  deleteGoods(index) {
    if (confirm('确定移除此项嘛？')) {
      this.ShoppingCart.splice(index, 1);
    }
  }

  /*allSelect(event: any) {
    const checkBox = document.getElementsByClassName('checkboxs');
    const allSelect = document.getElementById('allSelect');
    const status = allSelect.checked;
    if (status) {
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = true;
      }
    } else {
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = false;
      }
    }
  }

  oneSelect(ele) {
    const allSelect = document.getElementById('allSelect');
    if (!ele.checked) {
      allSelect.checked = false;
    } else {
      const elem = document.getElementsByName(ele.name);
      for (let i = 0; i < elem.length; i++) {
        if (!elem[i].checked) {
          return;
        }
      }
      allSelect.checked = true;
    }

  }*/


  goJS(event: any) {
    alert('JS');
  }

  DeleteGoods(event: any) {
    if (confirm('确定移除此项嘛？')) {
      this.ShoppingCart.splice(0, ShoppingCart.length);
    }
  }

  ChangeThisSelect(event: any) {
    alert('heihei');
  }


}



export class ShoppingCart {
  constructor(public img: string,
              public title: string,
              public price: number,
              public size: string,
              public number: number) {
  }
}
