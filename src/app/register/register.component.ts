import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name!: string;
  email! :string;
  password!: string;
  contact!: string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  register() {
let name=this.name;
let email=this.email;
let password=this.password;
let contact=this.contact;


    const userObj={"name":name,"email":email,"password":password,"contact":contact};
       const url="http://localhost:9000/users/save";
       this.http.post(url,userObj).subscribe((res)=>{
         console.log(res);
         alert("successfully Registered");
         },
       (err)=>{
         console.log(err);
         alert("Please re-enter your Details");
       });

}
}
