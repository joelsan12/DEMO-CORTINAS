import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from '../features/landing/components/hero-section/hero-section.component';
import { CatalogSectionComponent } from '../features/landing/components/catalog-section/catalog-section.component';
import { QuoteWizardComponent } from '../features/landing/components/quote-wizard/quote-wizard.component';
import { ProjectsComparisonComponent } from '../features/landing/components/projects-comparison/projects-comparison.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProjectsComparisonComponent
  ],
  declarations: [
    HomePage,
    HeroSectionComponent,
    CatalogSectionComponent,
    QuoteWizardComponent,
  ]
})
export class HomePageModule { }