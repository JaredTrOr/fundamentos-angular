import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/fundamentos/home/home.component';
import { MenuComponent } from './pages/url/menu/menu.component';
import { PostsComponent } from './pages/fundamentos/posts/posts.component';
import { UsersComponent } from './pages/fundamentos/users/users.component';
import { UserDetailComponent } from './pages/fundamentos/user-detail/user-detail.component';
import { HomeClientesComponent } from './pages/clientes/home-clientes/home-clientes.component';
import { ComputadorasComponent } from './pages/url/computadoras/computadoras.component';

const routes: Routes = [
  {
    path: 'home',
    component: MenuComponent
  },

  //Fundamentos paths
  {
    path: 'fundamentos',
    component: HomeComponent
  },
  {
    path: 'fundamentos/posts',
    component: PostsComponent
  },
  {
    path: 'fundamentos/users',
    component: UsersComponent
  },
  {
    path: 'fundamentos/user_detail/:id',
    component: UserDetailComponent
  },

  //Cliente paths: 
  {
    path: 'clientes',
    component: HomeClientesComponent
  },

  //Computadoras
  {
    path: 'computadoras',
    component: ComputadorasComponent
  },

  //Default path
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
