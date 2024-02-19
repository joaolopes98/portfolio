import { Injectable } from '@angular/core';
import { Job } from 'src/models/interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getJobs():Job[]{
    return [
      {
        title: 'FullStack Software Engineer',
        company: 'School Picture',
        startDate: 'Apr 2023',
        endDate: '-',
        description: 'Responsible for creating new features and maintaining a system that registers and renders books created by students from our client schools. I received the first opportunity to work as a full-stack developer, using Java (Spring Boot) on the back-end and AngularJS on the front-end. Gained experience with the AWS environment, creating Lambdas and integrating with SQS (Messaging).'
      },
      {
        title: 'Software Engineer',
        company: 'Piolett Sistema de Gestão',
        startDate: 'Nov 2017',
        endDate: 'Dez 2022',
        description: 'Responsible for creating a Point of Sale (POS) and management system for franchises, conducting integrations with other systems, and providing maintenance and error corrections in collaboration with support. This system was organized using agile methodologies such as Scrum and Kanban on the Jira platform, and programmed using Java and technologies like JavaFX, Maven, and Hibernate.'
      }
      
    ]
  }
}
