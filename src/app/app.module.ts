import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsarioComponent } from './usario/usario.component';
import { BotonesComponent } from './botones/botones.component';
import { TextoAleatorioComponent } from './texto-aleatorio/texto-aleatorio.component';
import { BaseDeDatosComponent } from './base-de-datos/base-de-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UsarioComponent,
    BotonesComponent,
    TextoAleatorioComponent,
    BaseDeDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
