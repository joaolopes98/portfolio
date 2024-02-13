import { Component } from '@angular/core';
import { Project } from 'src/models/interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects: Project[] = [
    {
      title: "Portfolio",
      description: "My first project using Angular, designed to showcase my work.",
      link: "https://github.com/joaolopes98/portfolio",
      background: "me.jpeg"
    },
    {
      title: "DOMUS",
      description: "A system created as the final college project, intended to be useful for managing small pet shops.",
      link: "https://github.com/joaolopes98/domus",
      background: "domus.png"
    },
    {
      title: "Portfolio",
      description: "My first project using Angular, designed to showcase my work.",
      link: "https://joaolopes98.github.io/portfolio/",
      background: "portfolio.png"
    }
  ];
  

}
