import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { AddPostRequest } from 'src/app/models/add-post';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService:UserService,private router:Router,private toast:NgToastService ) { }

  post:AddPostRequest = {
    jobBrief:'',
    jobTitle:'',
    requirementsAndSkills:'',
    responsibilities:'',
    publishedDate:'',
    updatedDate:'',
    visible:true
  }
  

  ngOnInit(): void {
  }

  
  onSubmit():void{
    this.postService.addPost(this.post)
    .subscribe(
      response => {
        this.toast.success({detail:"Sucess Message",summary:"Added Successfully",duration:5000})
        this.router.navigate(["admin/posts"]);
      }
    );
  }

}
