import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component(
  {
    selector: 'app-article', //tag name
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
  })

export class ArticleComponent implements OnInit 
{
  @HostBinding('attr.class') cssClass = 'row'; //a component HOST is 'the element this component is attached to.'
  @Input() article: Article;

  constructor() 
  { 
      // this.article = new Article
      // (
      //   'Angular 4',
      //   'http://angular.io',
      //   10
      // );
  }

  // by returning the click event handler to 'false', it ensured that the browser won't try to refresh the page

  voteUp(): boolean //click event handler -- relates to 'component view'
  {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean //click event handler -- relates to 'component view'
  {
    this.article.voteDown();
    return false;
  }

  ngOnInit() { }
}