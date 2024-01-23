import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  
  @Input() name: string | undefined;
  url: string = '';
  img: string = '';

  ngOnInit(): void {
    this.setSkills();
  }

  private setSkills() {
    switch(this.name){
      case 'Java':
        this.url = 'https://www.java.com';
        this.img = 'java.png';
        break;

      case 'Spring':    
        this.url = 'https://spring.io';
        this.img = 'spring.png';
        break;
        
      case 'Angular':
        this.url = 'https://angular.io';
        this.img = 'angular.png';
        break;
        
      case 'JavaFx':
        this.url = 'https://openjfx.io/';
        this.img = 'javafx.png';
        break;
        
      case 'HTML/CSS':
        this.url = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
        this.img = 'html-css.png';
        break;
        
      case 'Hibernate':
        this.url = 'https://hibernate.org/'; 
        this.img = 'hibernate.png';
        break;
        
      case 'Git':
        this.url = 'https://git-scm.com/';
        this.img = 'git.png';
        break;
        
      case 'Postgres':
        this.url = 'https://www.postgresql.org/';
        this.img = 'postgres.png';
        break;   

      case 'Alura':
        this.url = 'https://cursos.alura.com.br/user/joaolopes98/fullCertificate/86df9416e43345cfaf9224bcfb8f116c';
        this.img = 'alura.jpeg';
        break;

        case 'Flyway':
          this.url = 'https://flywaydb.org/';
          this.img = 'flyway.png';
          break;

        case 'Liquibase':  
          this.url = 'https://www.liquibase.org/';
          this.img = 'liquibase.png';
          break;
        case 'Git Flow':
          this.url = 'https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow';
          this.img = 'git-flow.png';
          break;
    }
  }

  openLink(url:string) {
    window.open(url, '_blank');
  }

}
