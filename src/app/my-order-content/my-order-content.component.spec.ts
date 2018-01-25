import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderContentComponent } from './my-order-content.component';

describe('MyOrderContentComponent', () => {
  let component: MyOrderContentComponent;
  let fixture: ComponentFixture<MyOrderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
