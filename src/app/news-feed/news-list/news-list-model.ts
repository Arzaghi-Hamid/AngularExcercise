export class NewsItemList
{
    constructor(){        
    }
    newsItems: Array<NewsItem>;
}
export class NewsItem
{
    Id:number;
    By:string;
    Descendants:number;
    Kids: Array<number>;
    Score:number;
    Time:string;
    Title:string;
    Url:string;
}