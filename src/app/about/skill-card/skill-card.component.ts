import { Component, Input } from '@angular/core';

import { Skill } from 'src/models/interfaces/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() skill!: Skill;

  openLink() {
    if (this.skill.name === 'Alura') {
      window.open(this.skill?.link, '_blank');
    }
  }
}
