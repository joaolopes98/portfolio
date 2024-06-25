import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ExperienceModule } from './experience/experience.module';
import { ContactModule } from './contact/contact.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroQueueListSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    PortfolioModule,
    ExperienceModule,
    ContactModule,
    RouterModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({ heroQueueListSolid, heroXMarkSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
