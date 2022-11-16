import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';

import { Post } from '../../core/models/post.model';

@Component({
  selector: 'ja-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent {
  posts: Observable<Post[]>;

  constructor(service: PostService) {
    this.posts = service.getAll();
  }
}
