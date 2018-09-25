import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-feed/news-list/news-list.component';
import { NewsDetailComponent } from './news-feed/news-detail/news-detail.component';
import { NewsCommentComponent } from './news-feed/news-comment/news-comment.component';
import { NewsFeedService } from './shared/news-feed-service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
