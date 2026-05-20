import { Component } from '@angular/core';

import { catalogCategories, curtainTypes, environments } from '../core/demo-content';
import { demoConfig } from '../core/demo.config';
import { Product, QuoteSelection } from '../shared/models/demo.models';
import { normalizeProductType } from '../shared/utils/quote.utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly config = demoConfig;
  readonly catalog = catalogCategories;
  readonly curtainTypes = curtainTypes;
  readonly environments = environments;

  selectedQuote: QuoteSelection = {
    type: 'Roller',
    product: 'Roller Blackout',
  };

  selectProduct(product: Product): void {
    this.selectedQuote = {
      type: normalizeProductType(product.type),
      product: product.name,
    };
    this.scrollToQuote();
  }

  scrollToCatalog(): void {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToQuote(): void {
    document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
