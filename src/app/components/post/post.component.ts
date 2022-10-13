import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:Post | undefined;

  constructor(private postService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params=>{
        const id=params.get('id');
        if(id){
          this.postService.getPostById(id)
          .subscribe(
            response=>{
              this.post=response;
            }
          )
        }
      }
    )
  }

}
