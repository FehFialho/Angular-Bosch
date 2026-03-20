import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { ItemCardComponent } from './features/main-page/mercado-page/item-card/item-card.component';
import { ComidaCardComponent } from './features/main-page/comida-page/comida-card/comida-card.component';
import { ItemModalComponent } from './features/main-page/mercado-page/item-modal/item-modal.component';
import { CreateAccountComponent } from './features/login-page/create-account/create-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    NavComponent,
    HeaderComponent,
    MercadoPageComponent,
    ComidaPageComponent,
    ItemCardComponent,
    ComidaCardComponent,
    ItemModalComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
