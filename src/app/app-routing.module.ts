import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { NewsListComponent } from "./news-feed/news-list/news-list.component";
import { NewsDetailComponent } from "./news-feed/news-detail/news-detail.component";

const routes: Routes=[
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home',component:NewsListComponent},
    {path:'newslist',component:NewsListComponent},
    {path:'newsitem',component:NewsDetailComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{ useHash:false })],
    exports:[RouterModule],
    providers:[]
})

export class AppRoutingModule { }
export const routingComponents = [
    NewsListComponent
]