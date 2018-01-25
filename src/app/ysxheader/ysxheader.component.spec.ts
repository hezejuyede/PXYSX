import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YsxheaderComponent } from './ysxheader.component';

describe('YsxheaderComponent', () => {
  let component: YsxheaderComponent;
  let fixture: ComponentFixture<YsxheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YsxheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YsxheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
