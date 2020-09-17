import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { OurBlogListComponent } from './our-blog-list/our-blog-list.component';
import { OurBlogDetailComponent } from './our-blog-detail/our-blog-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceSectionComponent } from './service-section/service-section.component';
import { OurNewsDetailComponent } from './our-news-detail/our-news-detail.component';
import { OurServiceDetailComponent } from './our-service-detail/our-service-detail.component';


//191773702
// 0221 / 466 191 00

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    OurServicesComponent,
    OurNewsComponent,
    ServiceSectionComponent,
    OurBlogListComponent,
    OurBlogDetailComponent,
    OurNewsDetailComponent,
    OurServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
