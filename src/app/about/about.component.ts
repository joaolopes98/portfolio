import { AboutService } from './about.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Skill } from 'src/models/interfaces/skill';
import { DateUtilsService } from '../shared/date-utils.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  age: number;
  yearsOfExperience: number;

  primarySkills: Skill[];
  secondarySkills: Skill[];

  carouselOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      490: {
        items: 3,
      },
      660: {
        items: 4,
      },
      830: {
        items: 5,
      },
      900: {
        items: 4,
      },
      1080: {
        items: 5,
      },
      1300: {
        items: 6,
      },
    },
  };

  constructor(
    private aboutService: AboutService,
    private dateUtils: DateUtilsService
  ) {
    this.primarySkills = aboutService.getPrimarySkills();
    this.secondarySkills = aboutService.getSecondarySkills();

    this.age = this.dateUtils.calculateYearsSince(new Date(1998, 5, 27));
    this.yearsOfExperience = this.dateUtils.calculateYearsSince(
      new Date(2017, 11, 1)
    );
  }
}
