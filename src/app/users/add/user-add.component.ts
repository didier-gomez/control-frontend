import {UserService} from "../user.service";
import {User} from "../user";
import { Router } from '@angular/router';
import { Component, Directive, forwardRef, Attribute, OnChanges, SimpleChanges,
  Input } from '@angular/core';
 import { NG_VALIDATORS,Validator, Validators, AbstractControl, ValidatorFn }
 from '@angular/forms';
@Component({
  selector: 'user-add',
  templateUrl: 'user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers: [UserService]
})


export class UserAddComponent {
  model: User;
  constructor(private userService: UserService,  private _router: Router) {
    this.model = new User();
  }

  onSubmit() {
    console.log(this.model.name);
    this.userService.createUser(this.model)
    .subscribe((res) => {
      this.goHome();
    }
  );
  }
  goHome(){
     this._router.navigate(['users', {}]);
   }
}
