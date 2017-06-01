import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

export class AppComponent 
{ 
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean //addArticle() FUNCTION can accept two arguments: 'title' and 'link' ARGUMENTS. 
    {
      console.log(`Adding article title: ${title.value} and link: ${link.value}`);
      return false;
    }
}
