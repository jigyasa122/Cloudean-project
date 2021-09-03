import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordtype:string="password";
  passcheck:boolean=false;
  userdata:any;
  fetchdata:any;
  constructor(private router:Router,private service:CommonserviceService) {
    this.userdata={
      email:"jigyasa@gmail.com",
      password:"Jigyasa@123"
    }
    this.service.setcredential(this.userdata);
   }

  ngOnInit(): void {
  }
  passwordsec()
  {
     if(this.passcheck)
     {
       this.passcheck=false;
       this.passwordtype="password"
     }
     else{
      this.passcheck=true;
      this.passwordtype="text";
     }
  }
  showmsg(frm:any)
  {    this.service.credential$.subscribe((res)=>{
       console.log(res);
       this.fetchdata=res;
       console.log(this.fetchdata.email);
       
  })
  
     if(frm.value.email==this.fetchdata.email && frm.value.password==this.fetchdata.password)
      {
      alert("Successfully logged in");
       this.router.navigate(['dashboard']);
      }
      else{
        alert("Enter correct Email or Passowrd");
      }

  }

}
