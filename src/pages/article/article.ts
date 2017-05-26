import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ArticlesService} from "../../_services/articles.service";
import {LoadingController} from 'ionic-angular';
import {Article} from "../../_models/article";
import {SocialSharing} from '@ionic-native/social-sharing';

/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  article_id: number;
  loader: any;
  article: Article;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public articlesService: ArticlesService,
              private socialSharing: SocialSharing) {
    // If we navigated to this page, we will have an item available as a nav param
    this.article_id = navParams.get('article_id');
    console.log('constructing');
    console.log(this.article_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
    this.refreshArticle();
  }

  private refreshArticle(refresher = null) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();

    this.articlesService.getSingleArticle(this.article_id).then(
      article => {
        console.log(article);
        this.article = article;
        this.loader.dismiss();
        if (refresher) {
          refresher.complete();
        }
      });

  }

  share() {
    this.socialSharing.share(this.article.title + ' ' + this.article.url, this.article.title, this.article.cover_image, this.article.url);
  }

}
