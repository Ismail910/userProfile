
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
// import { User } from 'src/app/@shared/model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  error:boolean=false
  userData?:any
  message?:string=''

  constructor(private _AuthService:AuthService ,private _Router:Router){}


  ngOnInit() : void{}

  loginForm =new FormGroup({
  email:new FormControl(null,[Validators.required]),
  password:new FormControl(null, [Validators.required ]),
})


submitloginForm(loginForm:FormGroup){
  
  this._AuthService.login(loginForm.value).subscribe({
    next: (Response)=>{
      this.userData = Response;
      localStorage.setItem('token',Response.token);
      localStorage.setItem('isLogin',"true");
     
      this._AuthService.saveCurrentUser();
     
      
      if (Response.admin == true) {
        localStorage.setItem('admin',"true");
        this._Router.navigate(['/admin']);
      }else{
        this._Router.navigate(['/userProfile']);
      }
     
    },
    error:()=>{
      this.message="Email or Password is not valid";
      this.error=true;
      setTimeout(() => {
        this.error=false;
      }, 4000);
    }
  })
}

}


