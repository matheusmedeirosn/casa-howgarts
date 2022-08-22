import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { GrifinoriaComponent } from './grifinoria/grifinoria.component';
import { SonserinaComponent } from './sonserina/sonserina.component';
import { CorvinalComponent } from './corvinal/corvinal.component';
import { LufaLufaComponent } from './lufa-lufa/lufa-lufa.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioCasaHogwartsComponent } from './formulario-casa-hogwarts/formulario-casa-hogwarts.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrosselComponent,
    GrifinoriaComponent,
    SonserinaComponent,
    CorvinalComponent,
    LufaLufaComponent,
    FooterComponent,
    FormularioCasaHogwartsComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
