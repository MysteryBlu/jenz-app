import { Component, Input } from '@angular/core';

import { PostComment } from '../../../core/models/post.model';

@Component({
  selector: 'ja-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() data!: PostComment;
}
