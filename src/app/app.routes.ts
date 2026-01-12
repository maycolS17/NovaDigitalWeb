import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AcercadeComponent } from './modules/pages/about/acercade.component';
import { ContactoComponent } from './modules/pages/contact/contacto.component';
import { ServiciosComponent } from './modules/pages/products/servicios.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'acercade', component: AcercadeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '**', redirectTo: ''},
];
