import { Component } from '@angular/core';

import { Job } from 'src/models/interfaces/job';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  jobs: Job[];

  constructor(private experienceService:ExperienceService) {
    this.jobs = experienceService.getJobs(); 
  }
}
