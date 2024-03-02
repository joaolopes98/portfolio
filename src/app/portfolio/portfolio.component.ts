import { PortfolioService } from './portfolio.service';
import { Component } from '@angular/core';
import { Project } from 'src/models/interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Project[];

  constructor(private portfolioService: PortfolioService) {
    this.projects = portfolioService.getProjects();
  }
}
