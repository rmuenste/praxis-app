import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-blog-detail',
  templateUrl: './our-blog-detail.component.html',
  styleUrls: ['./our-blog-detail.component.css']
})
export class OurBlogDetailComponent implements OnInit {

  postData: any = {};

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    console.log(this.location.getState());
    this.postData = this.location.getState();
  }

  goToList(url: string) {
    this.router.navigateByUrl(url);
  }

}
