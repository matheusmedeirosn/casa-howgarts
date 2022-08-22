import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { FormularioCasaHogwartsComponent } from './formulario-casa-hogwarts/formulario-casa-hogwarts.component';
import { GrifinoriaComponent } from './grifinoria/grifinoria.component';
import { LufaLufaComponent } from './lufa-lufa/lufa-lufa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SonserinaComponent } from './sonserina/sonserina.component';
import { CorvinalComponent } from './corvinal/corvinal.component';


const routes: Routes = [
  {path: '', component: CarrosselComponent},
  {path:'formulario-casa-hogwarts', component: FormularioCasaHogwartsComponent},
  {path: 'grifinoria', component: GrifinoriaComponent},
  {path: 'sonserina', component: SonserinaComponent},
  {path: 'corvinal', component: CorvinalComponent},
  {path: 'lufa-lufa', component: LufaLufaComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
