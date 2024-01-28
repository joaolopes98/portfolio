import { Component } from '@angular/core';

import { Skill } from 'src/models/interfaces/skill.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  primarySkills: Skill[] = [
    {
      name: 'Java',
      link: 'https://www.java.com',
      img: 'java.png',
      time: '6 years',
    },{

      name: 'Spring',    
      link: 'https://spring.io',
      img: 'spring.png',
      time: '1 year',
    },{
        
      name: 'Angular',
      link: 'https://angular.io',
      img: 'angular.png',
      time: '1 year',
    }
  ]
  secondarySkills: Skill[] =[
    {
      name: 'Alura',
      link: 'https://cursos.alura.com.br/user/joaolopes98/fullCertificate/86df9416e43345cfaf9224bcfb8f116c',
      img: 'alura.jpeg',
      time: ''
    },{
      name: 'HTML/CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      img: 'html-css.png',
      time: '1 year',
    },{ 
      name: 'Git',
      link: 'https://git-scm.com/',
      img: 'git.png',
      time: '6 years',
    },{
      name: 'Git Flow',
      link: 'https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow',
      img: 'git-flow.png',
      time: '5 years',
    },{ 
      name: 'Postgres',
      link: 'https://www.postgresql.org/',
      img: 'postgres.png',
      time: '6 years',
    },{   
      name: 'Liquibase',  
      link: 'https://www.liquibase.org/',
      img: 'liquibase.png',
      time: '1 years',
    },{
      name: 'Flyway',
      link: 'https://flywaydb.org/',
      img: 'flyway.png',
      time: '4 years',
    },{
      name: 'Hibernate',
      link: 'https://hibernate.org/', 
      img: 'hibernate.png',
      time: '5 years',
    },{
      name: 'JavaFx',
      link: 'https://openjfx.io/',
      img: 'javafx.png',
      time: '5 years',
    }
  ]

}