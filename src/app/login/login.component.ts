import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSmLogin: boolean = false;
  isZhLogin: boolean = true;

  constructor() {
  }
  ngOnInit() {
  }
  SmLogin(event: any) {
    this.isSmLogin = false;
    this.isZhLogin = true;
  }
  ZhLogin(event: any) {
    this.isSmLogin = true;
    this.isZhLogin = false;
  }
  QQLogin(event: any) {
    alert('QQ');
  }
  WXLogin(event: any) {
    alert('WX');
  }
}


