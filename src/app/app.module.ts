import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './posts/components/comment/comment.component';
import { PostComponent } from './posts/components/post/post.component';
import { ListPostComponent } from './posts/list/list-post.component';

const material = [
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    ListPostComponent
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
