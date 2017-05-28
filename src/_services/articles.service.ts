import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Article} from "../_models/article";
@Injectable()
export class ArticlesService {
  private feed_url = 'https://dev.to/api/articles';
  private article_url = 'https://dev.to/api/articles/';
  constructor(public http: Http) {

  }

  getArticlesContent(): Promise<Article[]> {
    return this.http.get(this.feed_url).toPromise().then(data=>{
      return data.json() as Article[];
    });
  }
  getSingleArticle(article_id: number): Promise<Article>{
    let url = this.article_url+article_id;
    console.log(url);
    return this.http.get(url).toPromise().then(
      data=>{return data.json() as Article}).catch(this.handleError);
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
