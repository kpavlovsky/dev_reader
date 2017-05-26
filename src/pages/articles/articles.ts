import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ArticlesService} from "../../_services/articles.service";
import {Article} from "../../_models/article";
import {LoadingController} from 'ionic-angular';
import {ArticlePage} from "../article/article";

/**
 * Generated class for the ArticlesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  articles: Article[];
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public articlesService: ArticlesService,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
    this.refreshFeed();
  }

  private refreshFeed(refresher = null) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();

    this.articlesService.getArticlesContent().then(
      articles => {
        console.log(articles);
        this.articles = articles;
        this.loader.dismiss();
        if (refresher){
          refresher.complete();
        }
      });

  }
   itemTapped(event, article_id) {
    this.navCtrl.push(ArticlePage, {
      article_id: article_id
    });
  }
}
