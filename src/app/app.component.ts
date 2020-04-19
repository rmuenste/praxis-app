import { Component } from '@angular/core';
import { StarwarsService } from './starwars.service';

import { from, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'praxis-muenster';

  myStarWarsChar: any = {
    name: ""
  };

  news: any[];

  subscription: Subscription;

  myArray = [1, 2, 3];

  constructor(private starWarsService: StarwarsService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

    this.subscription = this.starWarsService.getPosts().subscribe( data => {
      this.myStarWarsChar = data;
      this.news = [];
      for(let i = 0; i < data.length; i++) {
        if(data[i].categories.includes(2)) {
          this.news.push(data[i]);
          //console.log(this.news[this.news.length-1]);
        }
      }
    });

  }

  // a function with a generic parameter T that takes an array of type T as
  // an argument
  last = <T>(arr: T[]) => {
    return arr[arr.length - 1];
  }

  getStarWarsCharacter = () => {
//    // Create an observable
//    const data = from(fetch('https://swapi.co/api/people/1/'));
//
//    data.subscribe({
//      next: (response) => console.log(response),
//      error: (err) => console.log(err),
//      complete: () => console.log('Complete')
//    });
//    setTimeout( () => {
//      data.unsubscribe(), 10000
//    });
  }

}
