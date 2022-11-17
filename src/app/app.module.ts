import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './posts/components/comment/comment.component';
import { PostComponent } from './posts/components/post/post.component';
import { ListPostComponent } from './posts/list/list-post.component';
import { ViewPostComponent } from './posts/view/view-post.component';

const material = [
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    ListPostComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
