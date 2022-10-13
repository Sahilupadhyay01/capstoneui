import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService} from 'ng-angular-popup';
import { Post } from 'src/app/models/post';
import { UpdatePostRequest } from 'src/app/models/update-post';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route:ActivatedRoute,private postService:UserService,private router:Router,private toast:NgToastService) { }

  post:Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id){
          this.postService.getPostById(id)
          .subscribe(
            response => {
              this.post = response;
            }
          );
        }
      }
    );
  }

  onSubmit():void{
    const updatePostRequest: UpdatePostRequest = {
      jobBrief:this.post?.jobBrief,
      jobTitle:this.post?.jobTitle,
      requirementsAndSkills:this.post?.requirementsAndSkills,
      responsibilities:this.post?.responsibilities,
      visible:this.post?.visible,
      updatedDate:this.post?.updatedDate,
      publishedDate:this.post?.publishedDate

    }
    this.postService.updatePost(this.post?.id,updatePostRequest)
    .subscribe(
      response =>{
        this.toast.success({detail:"Sucess Message",summary:"Updated Successfully",duration:5000})
        this.router.navigate(["admin/posts"]);
      }
    )
  }

  deletePost():void{
    this.postService.deletePost(this.post?.id)
    .subscribe(
      response =>{
        this.toast.success({detail:"Sucess Message",summary:"Deleted Successfully",duration:5000})
        this.router.navigate(["admin/posts"]);
      }
    );
  }
  }

