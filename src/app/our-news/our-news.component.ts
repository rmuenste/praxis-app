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
      for(let i = 0; i < data.length; i++) {
        if(data[i].categories.includes(2)) {
          this.wpNews.push(data[i]);
//          console.log('News post data: %o',  data[i]);
        }
      }
      this.wpNews.sort((a, b) => {
        if( a.id > b.id) return -1;
        if( a.id < b.id) return 1;
        return 0;
      });

//      for(let i = 0; i < this.wpNews.length; i++) {
//          console.log('News post data: %o',  this.wpNews[i]);
//      }

    });
  }

  filterPosts() {
    if(this.wpNews.length > 0) {
      return this.wpNews.slice(0, 3);
      //return this.wpNews.filter(x => x.categories.includes(2) )
    } else {
      return [];
    }
  }

  ngOnDestroy() {
    this.wpSubscription.unsubscribe();
  }

}
