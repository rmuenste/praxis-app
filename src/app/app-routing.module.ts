import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OurBlogListComponent } from './our-blog-list/our-blog-list.component';
import { OurBlogDetailComponent } from './our-blog-detail/our-blog-detail.component';
import { OurNewsDetailComponent } from './our-news-detail/our-news-detail.component';
import { OurServiceDetailComponent } from './our-service-detail/our-service-detail.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'blog', component: OurBlogListComponent},
  {path: 'blog/:postId', component: OurBlogDetailComponent},
  {path: 'news/:newsId', component: OurNewsDetailComponent},
  {path: 'services/:serviceSlug', component: OurServiceDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
