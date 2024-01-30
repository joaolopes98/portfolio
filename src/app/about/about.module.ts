import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { AboutService } from './about.service';

@NgModule({
  declarations: [
    AboutComponent,
    SkillCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ],
  providers: [
    AboutService
  ]
})
export class AboutModule { }
