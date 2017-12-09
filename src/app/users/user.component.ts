import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidator} from "../shared/custom-validator";
import { Router } from '@angular/router';
import * as _ from "lodash";
@Component({
  selector: "users",
  templateUrl: 'user.component.html',
  providers: [UserService, FormBuilder]
})
export class UserComponent implements OnInit{
  users: User[];
  show:boolean;
  name:string;
  password:string;
  userForm: FormGroup;
  constructor(private userService: UserService,  private _router: Router) {
  }
  ngOnInit(){
    this.showUsers();
  }
  showUsers() {
    this.userService.getUsers().subscribe(users=> {
      console.log(users);
      if(!_.isEmpty(users)) {
        this.users = users;
      }
    });
  }
    deleteUser(name) {
      this.userService.deleteUser(name).subscribe((res)=> {
          console.log("deleted")
          console.log(res);
          this.showUsers();
      });
    }
    createUser(){
       this._router.navigate(['users/add', {}]);
/*      console.log("usuaro"+name);
      this.userService.createUser(name,password).subscribe((res)=>{
        console.log("creado");
        this.showUsers();
      }
    );*/
  }
}
interface User {
  name: string;
  password: string;
  last_access: Date;
}
