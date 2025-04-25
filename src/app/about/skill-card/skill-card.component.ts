import { Component, Input } from '@angular/core';

import { Skill } from 'src/models/interfaces/skill';
import { DateUtilsService } from 'src/app/shared/date-utils.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() skill!: Skill;

  constructor(private dateUtils: DateUtilsService) {}

  get time(): string {
    if (!this.skill?.date) return '';
    const years = this.dateUtils.calculateYearsSince(this.skill.date);
    return `${years} years`;
  }

  openLink() {
    if (this.skill.name === 'Alura') {
      window.open(this.skill?.link, '_blank');
    }
  }
}
