import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users/add', component: UserAddComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UserAddRoutingModule {
}
