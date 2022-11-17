import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map, Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';

import { Post } from '../../core/models/post.model';

@Component({
  selector: 'ja-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent {
  posts: Observable<Post[]>;
  filteredPosts: Observable<Post[]>;
  search = new FormControl<string>('');

  constructor(private service: PostService, private router: Router) {
    this.posts = this.service.getAll();
    this.filteredPosts = this.posts;

    this.search.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      if (value) {
        this.filteredPosts = this.posts.pipe(map(posts => {
          return posts.filter(p => this.concatName(p.user.firstName, p.user.lastName).toLocaleLowerCase().indexOf(value) >= 0);
        }));
      } else {
        this.filteredPosts = this.posts;
      }
    });
  }

  concatName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
  }

  viewPost(id: number) {
    void this.router.navigate([`post/${id}`]);
  }
}
