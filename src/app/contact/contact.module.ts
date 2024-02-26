import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { NgIconsModule } from '@ng-icons/core';
import { matLocationOnOutline } from '@ng-icons/material-icons/outline';



@NgModule({
  declarations: [
    ContactComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ matLocationOnOutline })
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
