import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsItem } from '../news-list/news-list-model';
import { NewsFeedService } from '../../shared/news-feed-service';
import { NewsDetailsRequest } from '../../shared/news-detail-request.model';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsId:number;
  newsItem:NewsItem = new NewsItem();
  newsDetailRequest: NewsDetailsRequest = new NewsDetailsRequest();
  constructor(private activeroute:ActivatedRoute,
              private newsService:NewsFeedService,
              private router:Router) { }

  ngOnInit() {
    this.activeroute.queryParams.subscribe(
        (params:Params)=> {
          this.newsId = params["id"]; // in case we want to go with GET and regular route mapping vs POST and Request object
          this.newsDetailRequest.itemid = params["id"];         
          
          this.newsService.getNewsFeedDetails(this.newsDetailRequest).subscribe(
              result=>{
                  if(result != undefined && result.NewsFeedItems != undefined)
                  this.newsItem = result.NewsFeedItems[0] as NewsItem
              }
          );            
        });    
  }

  handleChildNews(newsId:number)
  {    
    this.router.navigate(['newsitem'],{queryParams:{id:newsId}});
  }
}
