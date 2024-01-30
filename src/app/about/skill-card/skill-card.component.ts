import { Component, Input } from '@angular/core';

import { Skill } from 'src/models/interfaces/skill.interface';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  
  @Input() skill!: Skill;

  openLink() {
    window.open(this.skill?.link, '_blank');
  }

}
