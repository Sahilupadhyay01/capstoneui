import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  constructor(private postService:UserService) { }

  posts:Post[]=[];

  ngOnInit(): void {
    this.postService.getAllPost()
    .subscribe(
      response => {
        this.posts=response;
      }
    )
  }

}
