import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  UserSayNumber = 0;
  isRec1 = true;
  isRec2 = true;
  isRec3 = true;
  isRec4 = true;
  isRec5 = true;
  ischangeTime1 = true;
  ischangeTime2 = false;
  ischangeTime3 = false;
  ischangeShow1 = false;
  ischangeShow2 = true;
  ischangeShow3 = true;
  isrec1 = false;
  isrec2 = true;
  isrec3 = true;
  isrec4 = true;
  isrec5 = false;
  isrec6 = true;
  isrec7 = true;
  isrec8 = true;
  isrec9 = false;
  isrec10 = true;
  isrec11 = true;
  isrec12 = true;
  bannerData: Observable<any>;
  bannerNavData: Observable<any>;
  headerLineData: Observable<any>;
  jxData: Observable<any>;
  tsbuyData: Observable<any>;
  recommendData: Observable<any>;

  banner: Array<any> = [];
  bannerNav1: Array<any> = [];
  bannerNavS1: Array<any> = [];
  bannerNavS2: Array<any> = [];
  bannerNav2: Array<any> = [];
  bannerNavS3: Array<any> = [];
  bannerNavS4: Array<any> = [];
  bannerNav3: Array<any> = [];
  bannerNavS5: Array<any> = [];
  bannerNavS6: Array<any> = [];
  bannerNav4: Array<any> = [];
  bannerNavS7: Array<any> = [];
  bannerNavS8: Array<any> = [];
  bannerNav5: Array<any> = [];
  bannerNavS9: Array<any> = [];
  bannerNavS10: Array<any> = [];
  jx1: Array<any> = [];
  jx2: Array<any> = [];
  jx3: Array<any> = [];
  tsbuy1: Array<any> = [];
  tsbuy2: Array<any> = [];
  tsbuy3: Array<any> = [];
  tsbuy4: Array<any> = [];
  recommend1: Array<any> = [];
  recommend2: Array<any> = [];
  recommend3: Array<any> = [];
  recommend4: Array<any> = [];
  headerLine: Array<any> = [];
  /*商品列表*/
  pcGoodsListData: Observable<any>;
  px: Array<any> = [];
  px1: Array<any> = [];
  px2: Array<any> = [];
  px3: Array<any> = [];
  px4: Array<any> = [];
  px5: Array<any> = [];
  dx: Array<any> = [];
  dx1: Array<any> = [];
  dx2: Array<any> = [];
  dx3: Array<any> = [];
  dx4: Array<any> = [];
  dx5: Array<any> = [];
  xy: Array<any> = [];
  xy1: Array<any> = [];
  xy2: Array<any> = [];
  xy3: Array<any> = [];
  xy4: Array<any> = [];
  xy5: Array<any> = [];
  zr: Array<any> = [];
  zr1: Array<any> = [];
  zr2: Array<any> = [];
  zr3: Array<any> = [];
  zr4: Array<any> = [];
  zr5: Array<any> = [];
  nr: Array<any> = [];
  nr1: Array<any> = [];
  nr2: Array<any> = [];
  nr3: Array<any> = [];
  nr4: Array<any> = [];
  nr5: Array<any> = [];
  yr: Array<any> = [];
  yr1: Array<any> = [];
  yr2: Array<any> = [];
  yr3: Array<any> = [];
  yr4: Array<any> = [];
  yr5: Array<any> = [];
  jr: Array<any> = [];
  jr1: Array<any> = [];
  jr2: Array<any> = [];
  jr3: Array<any> = [];
  jr4: Array<any> = [];
  jr5: Array<any> = [];
  yz: Array<any> = [];
  yz1: Array<any> = [];
  yz2: Array<any> = [];
  yz3: Array<any> = [];
  yz4: Array<any> = [];
  yz5: Array<any> = [];
  wz: Array<any> = [];
  wz1: Array<any> = [];
  wz2: Array<any> = [];
  wz3: Array<any> = [];
  wz4: Array<any> = [];
  wz5: Array<any> = [];
  tl: Array<any> = [];
  tl1: Array<any> = [];
  tl2: Array<any> = [];
  tl3: Array<any> = [];
  tl4: Array<any> = [];
  tl5: Array<any> = [];
  md: Array<any> = [];
  md1: Array<any> = [];
  md2: Array<any> = [];
  md3: Array<any> = [];
  md4: Array<any> = [];
  md5: Array<any> = [];
  /*用户说*/
  userSayData: Observable<any>;
  userSay: Array<any> = [];


  constructor(private http: Http) {
    this.bannerData = this.http.get('/api/banner').map((res) => res.json());
    this.bannerNavData = this.http.get('/api/bannerNav').map((res) => res.json());
    this.jxData = this.http.get('/api/jx').map((res) => res.json());
    this.headerLineData = this.http.get('/api/headerLine').map((res) => res.json());
    this.tsbuyData = this.http.get('/api/tsbuy').map((res) => res.json());
    this.recommendData = this.http.get('/api/pcRecommend').map((res) => res.json());
    this.pcGoodsListData = this.http.get('/api/pcGoodsList').map((res) => res.json());
    this.userSayData = this.http.get('/api/userSay').map((res) => res.json());
  }

  ngOnInit() {
    this.bannerData.subscribe(
      (data) => this.banner = data
    );
    this.jxData.subscribe(
      (data) => this.jx1 = data[0].list1
    );
    this.jxData.subscribe(
      (data) => this.jx2 = data[1].list2
    );
    this.jxData.subscribe(
      (data) => this.jx3 = data[2].list3
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNav1 = data[0]
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNavS1 = data[0].forEach((value, index, arr) => {
        this.bannerNavS2.push(arr[index].classify);
      })
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNavS3 = data[1].forEach((value, index, arr) => {
        this.bannerNavS4.push(arr[index].classify);
      })
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNavS5 = data[2].forEach((value, index, arr) => {
        this.bannerNavS6.push(arr[index].classify);
      })
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNavS7 = data[3].forEach((value, index, arr) => {
        this.bannerNavS8.push(arr[index].classify);
      })
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNavS9 = data[4].forEach((value, index, arr) => {
        this.bannerNavS10.push(arr[index].classify);
      })
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNav2 = data[1]
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNav3 = data[2]
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNav4 = data[3]
    );
    this.bannerNavData.subscribe(
      (data) => this.bannerNav5 = data[4],
    );
    this.headerLineData.subscribe(
      (data) => this.headerLine = data
    );
    this.tsbuyData.subscribe(
      (data) => this.tsbuy1 = data[0]
    );
    this.tsbuyData.subscribe(
      (data) => this.tsbuy2 = data[1]
    );
    this.tsbuyData.subscribe(
      (data) => this.tsbuy3 = data[2]
    );
    this.tsbuyData.subscribe(
      (data) => this.tsbuy4 = data[3]
    );
    this.recommendData.subscribe(
      (data) => this.recommend1 = data[0]
    );
    this.recommendData.subscribe(
      (data) => this.recommend2 = data[1]
    );
    this.recommendData.subscribe(
      (data) => this.recommend3 = data[2]
    );
    this.recommendData.subscribe(
      (data) => this.recommend4 = data[3]
    );

    this.pcGoodsListData.subscribe(
      (data) => this.px = data[0]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.px1 = data[0].forEach((item, index, arr) => {
        this.px2.push(arr[index].classify);
        this.px3.push(arr[index].bannerImg);
        this.px4.push(arr[index].leftImg);
        this.px5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.dx = data[1]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.dx1 = data[1].forEach((item, index, arr) => {
        this.dx2.push(arr[index].classify);
        this.dx3.push(arr[index].bannerImg);
        this.dx4.push(arr[index].leftImg);
        this.dx5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.xy = data[2]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.xy1 = data[2].forEach((item, index, arr) => {
        this.xy2.push(arr[index].classify);
        this.xy3.push(arr[index].bannerImg);
        this.xy4.push(arr[index].leftImg);
        this.xy5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.zr = data[5]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.zr1 = data[5].forEach((item, index, arr) => {
        this.zr2.push(arr[index].classify);
        this.zr3.push(arr[index].bannerImg);
        this.zr4.push(arr[index].leftImg);
        this.zr5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.nr = data[4]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.nr1 = data[4].forEach((item, index, arr) => {
        this.nr2.push(arr[index].classify);
        this.nr3.push(arr[index].bannerImg);
        this.nr4.push(arr[index].leftImg);
        this.nr5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.yr = data[3]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.yr1 = data[3].forEach((item, index, arr) => {
        this.yr2.push(arr[index].classify);
        this.yr3.push(arr[index].bannerImg);
        this.yr4.push(arr[index].leftImg);
        this.yr5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.jr = data[8]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.jr1 = data[8].forEach((item, index, arr) => {
        this.jr2.push(arr[index].classify);
        this.jr3.push(arr[index].bannerImg);
        this.jr4.push(arr[index].leftImg);
        this.jr5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.yz = data[9]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.yz1 = data[9].forEach((item, index, arr) => {
        this.yz2.push(arr[index].classify);
        this.yz3.push(arr[index].bannerImg);
        this.yz4.push(arr[index].leftImg);
        this.yz5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.wz = data[6]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.wz1 = data[6].forEach((item, index, arr) => {
        this.wz2.push(arr[index].classify);
        this.wz3.push(arr[index].bannerImg);
        this.wz4.push(arr[index].leftImg);
        this.wz5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.tl = data[7]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.tl1 = data[7].forEach((item, index, arr) => {
        this.tl2.push(arr[index].classify);
        this.tl3.push(arr[index].bannerImg);
        this.tl4.push(arr[index].leftImg);
        this.tl5.push(arr[index].goodsImg);

      })
    );
    this.pcGoodsListData.subscribe(
      (data) => this.md = data[10]
    );
    this.pcGoodsListData.subscribe(
      (data) => this.md1 = data[10].forEach((item, index, arr) => {
        this.md2.push(arr[index].classify);
        this.md3.push(arr[index].bannerImg);
        this.md4.push(arr[index].leftImg);
        this.md5.push(arr[index].goodsImg);

      })
    );
    this.userSayData.subscribe(
      (data) => this.userSay = data
    );
  }

  hideBanner(event: any) {
    this.isRec1 = true;
    this.isRec2 = true;
    this.isRec3 = true;
    this.isRec4 = true;
    this.isRec5 = true;

  }

  showBanner1(event: any) {
    this.isRec1 = false;
    this.isRec2 = true;
    this.isRec3 = true;
    this.isRec4 = true;
    this.isRec5 = true;

  }

  showBanner2(event: any) {
    this.isRec1 = true;
    this.isRec2 = false;
    this.isRec3 = true;
    this.isRec4 = true;
    this.isRec5 = true;

  }

  showBanner3(event: any) {
    this.isRec1 = true;
    this.isRec2 = true;
    this.isRec3 = false;
    this.isRec4 = true;
    this.isRec5 = true;

  }

  showBanner4(event: any) {
    this.isRec1 = true;
    this.isRec2 = true;
    this.isRec3 = true;
    this.isRec4 = false;
    this.isRec5 = true;

  }

  showBanner5(event: any) {
    this.isRec1 = true;
    this.isRec2 = true;
    this.isRec3 = true;
    this.isRec4 = true;
    this.isRec5 = false;

  }

  changeTimeMorning(event: any) {
    this.ischangeTime1 = true;
    this.ischangeTime2 = false;
    this.ischangeTime3 = false;
    this.ischangeShow1 = false;
    this.ischangeShow2 = true;
    this.ischangeShow3 = true;
  }

  changeTimeNoon(event: any) {
    this.ischangeTime1 = false;
    this.ischangeTime2 = true;
    this.ischangeTime3 = false;
    this.ischangeShow1 = true;
    this.ischangeShow2 = false;
    this.ischangeShow3 = true;

  }

  changeTimeNight(event: any) {
    this.ischangeTime1 = false;
    this.ischangeTime2 = false;
    this.ischangeTime3 = true;
    this.ischangeShow1 = true;
    this.ischangeShow2 = true;
    this.ischangeShow3 = false;
  }

  nowBuy(event: any) {
    alert('heihei');

  }

  changeRecommendShow1(event: any) {
    this.isrec1 = false;
    this.isrec2 = true;
    this.isrec3 = true;
    this.isrec4 = true;
    this.isrec5 = false;
    this.isrec6 = true;
    this.isrec7 = true;
    this.isrec8 = true;
    this.isrec9 = false;
    this.isrec10 = true;
    this.isrec11 = true;
    this.isrec12 = true;
  }

  changeRecommendShow2(event: any) {
    this.isrec1 = true;
    this.isrec2 = false;
    this.isrec3 = true;
    this.isrec4 = true;
    this.isrec5 = true;
    this.isrec6 = false;
    this.isrec7 = true;
    this.isrec8 = true;
    this.isrec9 = true;
    this.isrec10 = false;
    this.isrec11 = true;
    this.isrec12 = true;

  }

  changeRecommendShow3(event: any) {
    this.isrec1 = true;
    this.isrec2 = true;
    this.isrec3 = false;
    this.isrec4 = true;
    this.isrec5 = true;
    this.isrec6 = true;
    this.isrec7 = false;
    this.isrec8 = true;
    this.isrec9 = true;
    this.isrec10 = true;
    this.isrec11 = false;
    this.isrec12 = true;

  }

  changeRecommendShow4(event: any) {
    this.isrec1 = true;
    this.isrec2 = true;
    this.isrec3 = true;
    this.isrec4 = false;
    this.isrec5 = true;
    this.isrec6 = true;
    this.isrec7 = true;
    this.isrec8 = false;
    this.isrec9 = true;
    this.isrec10 = true;
    this.isrec11 = true;
    this.isrec12 = false;

  }


  addCart(event: any) {
    alert('已加入购物车');
  }
}

