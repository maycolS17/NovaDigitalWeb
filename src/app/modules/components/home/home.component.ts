import { Component } from "@angular/core";
import { FondoComponent } from "../../shared/fondo/fondo.component";
import { PresentacionComponent } from "../../shared/presentacion/presentacion.component";
import { ProductoComponent } from "../../shared/producto/producto.component";
import { WhatsappFloatComponent } from "../../shared/whatsapp/whatsapp.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [FondoComponent, PresentacionComponent, ProductoComponent, WhatsappFloatComponent],
    standalone: true,
})
export class HomeComponent {
    
}