import { Component } from '@angular/core';
import { Contact } from 'src/models/interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts: Contact[];

  constructor() {
    this.contacts = [
      {
        icon: 'matEmailOutline',
        title: 'joaopalosi@gmail.com',
        link: 'mailto:joaopalosi@gmail.com'
      },
      {
        icon: 'matLocalPhoneOutline',
        title: '+55 (12) 991922-2265',
        link: '#contact',
      },{
        icon: 'matLocationOnOutline',
        title: 'Taubaté/SP - Brazil',
        link: 'https://www.google.com/maps/place/Taubat%C3%A9+-+SP'
      }
    ];
  }
}
