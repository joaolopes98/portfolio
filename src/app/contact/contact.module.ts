import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  matEmailOutline,
  matLocalPhoneOutline,
  matLocationOnOutline,
} from '@ng-icons/material-icons/outline';
import { SocialMediaModule } from '../social-media/social-media.module';

@NgModule({
  declarations: [ContactComponent, ContactCardComponent],
  imports: [
    CommonModule,
    SocialMediaModule,
    NgIconsModule.withIcons({
      matEmailOutline,
      matLocalPhoneOutline,
      matLocationOnOutline,
    }),
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
