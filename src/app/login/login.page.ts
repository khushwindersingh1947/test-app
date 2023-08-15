import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!:String;
  password!:String;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(){
    const url = `${environment.apiUrl}/api/login`;
    const body = {username: this.email, password:this.password}
    
    this.http.post(url, body).subscribe((body)=>{
      console.log("Successfully sent login data");
      // this.storage.set('username',this.email);
      this.router.navigate(['/home']);
    },(errors) => {
      console.log(errors);
    });
  }
}
