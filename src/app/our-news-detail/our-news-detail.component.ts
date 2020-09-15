import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-news-detail',
  templateUrl: './our-news-detail.component.html',
  styleUrls: ['./our-news-detail.component.css']
})
export class OurNewsDetailComponent implements OnInit {

  newsData: any = {};

  // Inject location and router
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.newsData = this.location.getState();
    console.log("News object: %o", this.newsData);
  }

  goToHome(url: string) {
    this.router.navigateByUrl(url);
  }

}
