import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['assets/images/slide1.jpg', 'assets/images/slide2.jpg', 'assets/images/slide3.jpg', 'assets/images/slide4.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
