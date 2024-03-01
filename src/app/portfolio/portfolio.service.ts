import { Injectable } from '@angular/core';
import { Project } from 'src/models/interfaces/project';

@Injectable()
export class PortfolioService {
  constructor() {}

  getProjects(): Project[] {
    return [
      {
        title: 'Portfolio',
        description:
          'My first project using Angular, designed to showcase my work.',
        link: 'https://github.com/joaolopes98/portfolio',
        background: 'me.jpeg',
      },
      {
        title: 'DOMUS',
        description:
          'A system created as the final college project, intended to be useful for managing small pet shops.',
        link: 'https://github.com/joaolopes98/domus',
        background: 'domus.png',
      },
      {
        title: 'Stay Tuned',
        description: 'Next projects coming soon.',
        link: undefined,
        background: 'soon.JPG',
      },
    ];
  }
}
