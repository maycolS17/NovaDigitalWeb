import { Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { AcercadeComponent } from './modules/components/about/acercade.component';
import { ContactoComponent } from './modules/components/contact/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'acercade', component: AcercadeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', redirectTo: ''},
];
