import { Component } from '@angular/core';
import { Contact } from 'src/models/interfaces/contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
  }
}
