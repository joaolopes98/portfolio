import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { JobComponent } from './job/job.component';
import { ExperienceService } from './experience.service';

@NgModule({
  declarations: [ExperienceComponent, JobComponent],
  imports: [CommonModule],
  exports: [ExperienceComponent],
  providers: [ExperienceService],
})
export class ExperienceModule {}
