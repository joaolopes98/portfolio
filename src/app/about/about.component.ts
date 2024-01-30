import { AboutService } from './about.service';
import { Component } from '@angular/core';

import { Skill } from 'src/models/interfaces/skill.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  primarySkills: Skill[] = [];
  secondarySkills: Skill[] = [];

  constructor(private aboutService: AboutService) {
    this.primarySkills = aboutService.getPrimarySkills();
    this.secondarySkills = aboutService.getSecondarySkills();
  }
}