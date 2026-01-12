import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-contacto",
    templateUrl: "./contacto.component.html",
    standalone: true,
    imports: [FormsModule],
})
export class ContactoComponent {
    form = { name: '', email: '', phone: '', message: '' };

    send() {
        fetch('https://hook.us2.make.com/f1762cx2i7ue3nppfqyhgrvr8f83paas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.form.name,
                email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
            })
        })
        .then(() => alert('Mensaje enviado con exito'))
        .catch(() => alert('Error al enviar el mensaje'));
    }
}
