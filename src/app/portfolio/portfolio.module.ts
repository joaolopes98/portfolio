import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PortfolioComponent
  ]
})
export class PortfolioModule { }
