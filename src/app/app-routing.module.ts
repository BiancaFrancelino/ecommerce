import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CondpagComponent } from './condpag/condpag.component';
import { CondpagListarComponent } from './condpag/condpag-listar/condpag-listar.component';
import { CondpagFormComponent } from './condpag/condpag-form/condpag-form.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'categoria', component:CategoriaComponent,
   children:[
    {path:'',redirectTo:'listar', pathMatch:'full'} ,
    {path:'listar', component:CategoriaListarComponent},
    {path:'form', component:CategoriaFormComponent},
    {path:'form/:indice', component:CategoriaFormComponent}
   ]},
   {path:'condpag', component:CondpagComponent,
   children:[
    {path:'',redirectTo:'listar', pathMatch:'full'} ,
    {path:'listar', component:CondpagListarComponent},
    {path:'form', component:CondpagFormComponent},
    {path:'form/:indice', component:CondpagFormComponent}
   ]},
   {path:'subcategoria', component:SubcategoriaComponent,
   children:[
    {path:'',redirectTo:'listar', pathMatch:'full'} ,
    {path:'listar', component:SubcategoriaListarComponent},
    {path:'form', component:SubcategoriaFormComponent},
    {path:'form/:indice', component:SubcategoriaFormComponent}
   ]},
   {path:'usuarios', component:UsuariosComponent,
   children:[
    {path:'',redirectTo:'listar', pathMatch:'full'} ,
    {path:'listar', component:UsuariosListarComponent},
    {path:'form', component:UsuariosFormComponent},
    {path:'form/:indice', component:UsuariosFormComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
