import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/shared/nav-bar/navbar.component';
import { FooterComponent } from "./modules/shared/footer/footer.component";
import { WhatsappFloatComponent } from "./modules/shared/whatsapp/whatsapp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappFloatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('novadigitalWeb');
}
