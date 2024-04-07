import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchComponent },
  { path: 'recipes', component: RecipeListComponent },

  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthGuard]
  },

  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
