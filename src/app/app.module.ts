import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakerService } from './shared_services/faker.service';
import { CommentListComponent } from './comments/comment-list.component';
import { ArticleComponent } from './comments/article.component';
import { SiteHeaderComponent } from './site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentListComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
