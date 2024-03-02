import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin,
  bootstrapWhatsapp,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapWhatsapp,
    }),
  ],
  exports: [SocialMediaComponent],
})
export class SocialMediaModule {}
