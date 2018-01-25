import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YsxfooterComponent } from './ysxfooter.component';

describe('YsxfooterComponent', () => {
  let component: YsxfooterComponent;
  let fixture: ComponentFixture<YsxfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YsxfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YsxfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
