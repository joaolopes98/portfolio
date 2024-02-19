import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { JobComponent } from './job/job.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    JobComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
