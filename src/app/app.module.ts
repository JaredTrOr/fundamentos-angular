//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

//url components
import { MenuComponent } from './pages/url/menu/menu.component';
import { NavbarComponent } from './pages/url/navbar/navbar.component';

//Fundamentos components
import { HomeComponent } from './pages/fundamentos/home/home.component';
import { PostsComponent } from './pages/fundamentos/posts/posts.component';
import { UsersComponent } from './pages/fundamentos/users/users.component';
import { UserDetailComponent } from './pages/fundamentos/user-detail/user-detail.component';
import { MenuComponentFundamentos } from './pages/fundamentos/menu/menu.component';

//Clientes components
import { AltaClienteComponent } from './pages/clientes/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/clientes/lista-clientes/lista-clientes.component';
import { HomeClientesComponent } from './pages/clientes/home-clientes/home-clientes.component';
import { AltaComputadorasComponent } from './pages/url/alta-computadoras/alta-computadoras.component';
import { ListaComputadorasComponent } from './pages/url/lista-computadoras/lista-computadoras.component';
import { ComputadorasComponent } from './pages/url/computadoras/computadoras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,

    //Fundamentos
    HomeComponent,
    PostsComponent,
    UsersComponent,
    UserDetailComponent,
    MenuComponentFundamentos,

    //Clientes
    HomeClientesComponent,
    AltaClienteComponent,
    ListaClientesComponent,
    AltaComputadorasComponent,
    ListaComputadorasComponent,
    ComputadorasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
