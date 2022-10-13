import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { NgToastService} from 'ng-angular-popup'



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  type:string = "password";

  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:UserService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.toast.success({detail:"Sucess Message",summary:res.message,duration:5000})
          this.loginForm.reset();
          this.router.navigate(['user-dashboard']);
        },
        error:(err)=>{
          this.toast.warning({detail:"Warning Message",summary:"Login Failed, Try Again later!!",duration:5000})
        }
      })
    }
    else{
      this.validateAllFormFields(this.loginForm);
      this.toast.error({detail:"error Message",summary:"All Fields Require",duration:5000})
    }
  }
   
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({ onlySelf:true});
      } else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }


}
