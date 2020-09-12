import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogDetailComponent } from './our-blog-detail.component';

describe('OurBlogDetailComponent', () => {
  let component: OurBlogDetailComponent;
  let fixture: ComponentFixture<OurBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
