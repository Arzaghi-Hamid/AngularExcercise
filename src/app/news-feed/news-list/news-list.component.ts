import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../shared/news-feed-service';
import { NewsItemList, NewsItem } from './news-list-model';
import { WebApiResponseCode } from '../../shared/WebApiResponseCode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsFeedCollection : NewsItemList = new NewsItemList();

  constructor(private newsService:NewsFeedService,
              private router:Router) { }

  ngOnInit() {
    this.newsService.getNewsFeedList().subscribe(
        res =>{
          if(res.ResponseCode == WebApiResponseCode.Ok)
          {
               this.newsFeedCollection.newsItems = res.NewsFeedItems as Array<NewsItem>
          }
          else if(res.ResponseCode == WebApiResponseCode.UnknownError)
          {
               alert('An error occured during retrieving information from API');
          }
        }
    )
  }

  handleNewsSelection(news:NewsItem)
  {
    if(news != null || news!= undefined)
    {
      this.router.navigate(['newsitem'],{queryParams:{id:news.Id}});
    }
  }
}
