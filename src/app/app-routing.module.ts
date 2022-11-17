import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPostComponent } from './posts/list/list-post.component';
import { ViewPostComponent } from './posts/view/view-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: ListPostComponent },
  { path: 'post/:id', component: ViewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
