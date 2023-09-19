import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule } from '@angular/forms';
import { CondpagComponent } from './condpag/condpag.component';
import { CondpagListarComponent } from './condpag/condpag-listar/condpag-listar.component';
import { CondpagFormComponent } from './condpag/condpag-form/condpag-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    CondpagComponent,
    CondpagListarComponent,
    CondpagFormComponent,
    SubcategoriaListarComponent,
    SubcategoriaFormComponent,
    SubcategoriaComponent,
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosFormComponent,
    ProdutoComponent,
    ProdutoListarComponent,
    ProdutoFormComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    FornecedorComponent,
    FornecedorListarComponent,
    FornecedorFormComponent,
    EstadoComponent,
    EstadoFormComponent,
    EstadoListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyD4-i2MI494EVQYzkUlTjdgKFirbErFpmw",
      authDomain: "ecommerce-9c941.firebaseapp.com",
      projectId: "ecommerce-9c941",
      storageBucket: "ecommerce-9c941.appspot.com",
      messagingSenderId: "970366498916",
      appId: "1:970366498916:web:3a31b009f18678fb530771",
      measurementId: "G-4BP9WSWCLX"}),
      AngularFireStorageModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
