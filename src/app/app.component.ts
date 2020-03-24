import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<div class="flex-container">
  <site-header></site-header>
  <main-article></main-article>
  <comment-list></comment-list>
  </div>`,
  styles:[`.flex-container{display: flex;flex-direction:column;width:80%;margin:0 auto;background-color:#ccffcc;padding:20px}`]
})
export class AppComponent {
  title = 'myFirstServiceOrientedApp';
}
