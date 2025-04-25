import { Skill } from '../../models/interfaces/skill';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  constructor() {}

  getPrimarySkills(): Skill[] {
    return [
      {
        name: 'Java',
        link: 'https://www.java.com',
        img: 'java.png',
        date: new Date(2017, 10, 1),
      },
      {
        name: 'Spring',
        link: 'https://spring.io',
        img: 'spring.png',
        date: new Date(2023, 3, 1),
      },
      {
        name: 'Angular',
        link: 'https://angular.io',
        img: 'angular.png',
        date: new Date(2023, 3, 1),
      },
      {
        name: 'Alura',
        link: 'https://cursos.alura.com.br/user/joaolopes98/fullCertificate/86df9416e43345cfaf9224bcfb8f116c',
        img: 'alura.jpeg',
        date: new Date(2017, 10, 1),
      },
    ];
  }

  getSecondarySkills(): Skill[] {
    return [
      {
        name: 'HTML/CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        img: 'html-css.png',
        date: new Date(2023, 3, 1),
      },
      {
        name: 'Git',
        link: 'https://git-scm.com/',
        img: 'git.png',
        date: new Date(2017, 10, 1),
      },
      {
        name: 'Git Flow',
        link: 'https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow',
        img: 'git-flow.png',
        date: new Date(2018, 10, 1),
      },
      {
        name: 'Postgres',
        link: 'https://www.postgresql.org/',
        img: 'postgres.png',
        date: new Date(2017, 10, 1),
      },
      {
        name: 'Liquibase',
        link: 'https://www.liquibase.org/',
        img: 'liquibase.png',
        date: new Date(2023, 3, 1),
      },
      {
        name: 'Flyway',
        link: 'https://flywaydb.org/',
        img: 'flyway.png',
        date: new Date(2018, 10, 1),
      },
      {
        name: 'Hibernate',
        link: 'https://hibernate.org/',
        img: 'hibernate.png',
        date: new Date(2017, 10, 1),
      },
      {
        name: 'JavaFx',
        link: 'https://openjfx.io/',
        img: 'javafx.png',
        date: new Date(2017, 10, 1),
      },
    ];
  }
}
