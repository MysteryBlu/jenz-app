import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './posts/components/comment/comment.component';
import { PostComponent } from './posts/components/post/post.component';
import { ListPostComponent } from './posts/list/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
