import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress-service.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-news',
  templateUrl: './our-news.component.html',
  styleUrls: ['./our-news.component.css']
})
export class OurNewsComponent implements OnInit {

  wpNews: any[] = [];

  wpSubscription: Subscription;

  // Inject the service
  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.wpSubscription = this.wordpressService.getNews().subscribe( data => {
      this.wpNews = [];
      this.wpNews = data;
//      for(let i = 0; i < data.length; i++) {
//        if(data[i].categories.includes(2)) {
////          this.wpNews.push(data[i]);
////          console.log(data[i]);
//        }
//      }
    })
  }

  filterPosts() {
    if(this.wpNews.length > 0) {
      return this.wpNews.filter(x => x.categories.includes(2) && x.id > 61)
    } else {
      return [];
    }
  }

  ngOnDestroy() {
    this.wpSubscription.unsubscribe();
  }

}
