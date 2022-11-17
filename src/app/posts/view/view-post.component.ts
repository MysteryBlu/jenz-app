import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';

import { Post } from '../../core/models/post.model';

@Component({
  selector: 'ja-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {
  post!: Observable<Post>;
  id!: number;

  constructor(private service: PostService, private route: ActivatedRoute, private location: Location) {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      this.id = +param;

      this.post = this.service.get(this.id);
    } else {
      this.return();
    }
  }

  return() {
    this.location.back();
  }
}
