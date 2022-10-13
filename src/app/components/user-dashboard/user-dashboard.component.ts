import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private postService:UserService) { }

  posts:Post []=[];
  
  post:Post | undefined;

  ngOnInit(): void {
  
    this.postService.getAllPost()
    .subscribe(
      response =>{
        this.posts=response;
        this.post=this.posts[0]
      }
    );
  }


}
