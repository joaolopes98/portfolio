import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  socialMedias: SocialMedia[] = [
    {
      icon: 'bootstrapLinkedin',
      link: 'https://www.linkedin.com/in/joaolopes98/',
    },
    {
      icon: 'bootstrapGithub',
      link: 'https://github.com/joaolopes98',
    },
    {
      icon: 'bootstrapInstagram',
      link: 'https://www.instagram.com/joaooolopes',
    },
    {
      icon: 'bootstrapWhatsapp',
      link: 'https://wa.me/5512991922265',
    },
  ];
}

interface SocialMedia {
  icon: string;
  link: string;
}
