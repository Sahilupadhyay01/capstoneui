import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { NgToastService} from 'ng-angular-popup'




@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  type:string = "password";
  signUpForm!:FormGroup;
  constructor(private fb :FormBuilder,private authen:UserService,private router:Router,private toast:NgToastService) { }


  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  OnSignUp(){    
    if(this.signUpForm.valid){
      this.authen.signUp(this.signUpForm.value)      
      .subscribe({
        next:(res=>{
       
         this.toast.success({detail:"Success Message",summary:res.message,duration:5000})
          this.signUpForm.reset();
          this.router.navigate(['user-login']);
        })
        ,error:(err=>{
          this.toast.error({detail:"error Message",summary:err?.error.message,duration:15000})
        })
      })
    }
    else{
      this.validateAllFormFields(this.signUpForm);
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
