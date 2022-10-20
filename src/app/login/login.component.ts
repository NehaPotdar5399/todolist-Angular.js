import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  ngOnInit(): void {
    
  }
  check(email: any,password: any){
    if(this.email=='neharpotdar68@gmail.com'&& this.password=='neha@990503'){
      alert('login successful');
    }
    else{
      alert('login failed');
    }
    

  }

}
