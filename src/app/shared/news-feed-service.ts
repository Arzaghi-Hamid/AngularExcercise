import { Injectable } from "@angular/core";
import {HttpHeaders,HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { NewsDetailsRequest } from "./news-detail-request.model";


const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class NewsFeedService{
        constructor(private http:HttpClient)
        {

        }
    public getNewsFeedList(): Observable<any>{
        return this.http.get(
            environment.apiUrl + "newsfeed/getitems",
            httpOptions
        );
    }

    public getNewsFeedDetails(newsDetailsRequest:NewsDetailsRequest): Observable<any>{
        return this.http.post(
            environment.apiUrl + "newsfeed/getitem",
            JSON.stringify(newsDetailsRequest),
            httpOptions
        );
    }
}