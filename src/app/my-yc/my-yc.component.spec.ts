import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyYcComponent } from './my-yc.component';

describe('MyYcComponent', () => {
  let component: MyYcComponent;
  let fixture: ComponentFixture<MyYcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyYcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyYcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
