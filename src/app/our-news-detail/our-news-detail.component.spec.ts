import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsDetailComponent } from './our-news-detail.component';

describe('OurNewsDetailComponent', () => {
  let component: OurNewsDetailComponent;
  let fixture: ComponentFixture<OurNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
