import { Component, Input } from '@angular/core';

import { PostComment } from '../../../core/models/post.model';

@Component({
  selector: 'ja-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() data!: PostComment;
}
