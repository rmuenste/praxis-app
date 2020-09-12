import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-blog-list',
  templateUrl: './our-blog-list.component.html',
  styleUrls: ['./our-blog-list.component.css']
})
export class OurBlogListComponent implements OnInit {

  blogPosts: any[] = [];

  subscription: Subscription;

  // Inject the http-service for blog posts into the component
  constructor(private starWarsService: StarwarsService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.starWarsService.getPosts().subscribe( data => {
      this.blogPosts = [];
      this.blogPosts = data;
//      console.log("Blog page");
      for(let i = 0; i < data.length; i++) {
        if(data[i].categories.includes(3)) {
//          this.blogPosts.push(data[i]);
          console.log(data[i]);
        }
      }

    });
  }

  filterPosts() {
    if(this.blogPosts.length > 0) {
      return this.blogPosts.filter(x => x.categories.includes(3))
    } else {
      return [];
    }
  }


}
