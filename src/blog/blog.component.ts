import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app',
  template: `<div *ng-for="let blog of blogs">{{blog.title}} - {{blog.content}}</div>`
})
export class BlogComponent implements OnInit {
  private blogs;
  private blogService: BlogService;
  constructor(blogService: BlogService) {  
      this.blogService = blogService;
  }

  ngOnInit() { 
      this.blogService.blogs
      .subscribe(
        blogs => this.blogs = blogs,
        error => console.error(`Error: ${error}`)
      );
  }
}