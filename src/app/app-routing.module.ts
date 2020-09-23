import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AddRestaurentComponent, path: 'add' },
  { component: UpdateRestaurentComponent, path: 'update/:id' },
  { component: ListRestaurentComponent, path: 'list' },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
