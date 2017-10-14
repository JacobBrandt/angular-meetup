import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostsService } from "./posts.service";
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription';;
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];;
  postsSub: Subscription;
  filteredPosts: Post[];
  form: FormGroup;

  constructor(
    private postsService: PostsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postsSub = this.postsService.getPosts()
    .subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = this.posts;
    });

    const search = new FormControl();
    search.valueChanges.subscribe((value) => {
      this.filteredPosts = this.filterPosts(value, this.posts);
      console.log(value);
    });
    this.form = this.fb.group({
      search: search
    })
  }

  ngOnDestroy() {
    if (this.postsSub) {
      this.postsSub.unsubscribe();
    }
  }

  filterPosts(value, posts: Post[]) {
    if (value) {
      return posts.filter((post) => {
        return post.title.includes(value) || post.body.includes(value);
      })
    }
    return posts;
  }

  get search() {
    return this.form.get("search").value;
  }

}
