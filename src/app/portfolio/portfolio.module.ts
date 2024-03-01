import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  declarations: [PortfolioComponent, ProjectCardComponent],
  imports: [CommonModule],
  exports: [PortfolioComponent],
  providers: [PortfolioService],
})
export class PortfolioModule {}
