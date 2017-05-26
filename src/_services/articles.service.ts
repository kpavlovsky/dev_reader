import {Injectable}    from '@angular/core';
// import {Http, Response} from '@angular/http';
// import {Storage} from '@ionic/storage';
import {Articles} from '../_models/articles';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {HTTP} from '@ionic-native/http';
import {Article} from "../_models/article";
@Injectable()
export class ArticlesService {
  private feed_url = 'https://dev.to/api/articles';
  private article_url = 'https://dev.to/api/articles/';
  constructor(public http: HTTP) {

  }

  getArticlesContent(): Promise<Article[]> {
    return this.http.get(this.feed_url, {}, {}).then(
      data=>{
        return JSON.parse(data.data) as Article[];
      }).catch(this.handleError);
  }

  // private extractArticles(res: Response): Articles {
  //   let feed = res.json();
  //   return feed || {};
  // }
  getSingleArticle(article_id: number): Promise<Article>{
    let url = this.article_url+article_id;
    console.log(url);
    return this.http.get(url, {}, {}).then(
      data=>{return JSON.parse(data.data) as Article}).catch(this.handleError);
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
