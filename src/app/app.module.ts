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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent
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
