import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CondpagComponent } from './condpag/condpag.component';
import { CondpagListarComponent } from './condpag/condpag-listar/condpag-listar.component';
import { CondpagFormComponent } from './condpag/condpag-form/condpag-form.component';

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
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
