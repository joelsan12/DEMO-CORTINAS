import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CatalogSectionComponent } from '../features/landing/components/catalog-section/catalog-section.component';
import { HeroSectionComponent } from '../features/landing/components/hero-section/hero-section.component';
import { ProjectsComparisonComponent } from '../features/landing/components/projects-comparison/projects-comparison.component';
import { QuoteWizardComponent } from '../features/landing/components/quote-wizard/quote-wizard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeroSectionComponent,
    CatalogSectionComponent,
    QuoteWizardComponent,
    ProjectsComparisonComponent
  ]
})
export class HomePageModule {}
