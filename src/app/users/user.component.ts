import { Component } from '@angular/core';
import {UserService} from "./user.service";

import * as _ from "lodash";
@Component({
  selector: "users",
  templateUrl: 'user.component.html',
  providers: [UserService]
})
export class UserComponent {
  users: User[];
  show:boolean;
  name:string;
  password:string;
  constructor(private userService: UserService) {
    this.users=[];
    this.show=true;

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
    createUser(name,password){
      console.log("usuaro"+name);
      this.userService.createUser(name,password).subscribe((res)=>{
        console.log("creado");
        this.showUsers();
      }
    );
  }



}
interface User {
  name: string;
  password: string;
  last_access: Date;
}
