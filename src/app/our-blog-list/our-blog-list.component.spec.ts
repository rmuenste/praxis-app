import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogListComponent } from './our-blog-list.component';

describe('OurBlogListComponent', () => {
  let component: OurBlogListComponent;
  let fixture: ComponentFixture<OurBlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBlogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
