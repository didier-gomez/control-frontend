import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { UserAddComponent } from './users/add/user-add.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'Usuarios registrados' }
  },
  { path: 'users/add',
    component: UserAddComponent,
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent, UserComponent, UserAddComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true }
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
