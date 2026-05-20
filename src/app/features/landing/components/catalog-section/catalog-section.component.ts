import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { CatalogCategory, Product } from '../../../../shared/models/demo.models';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.component.html',
  styleUrls: ['./catalog-section.component.scss'],
  standalone: false,
})
export class CatalogSectionComponent implements OnChanges {
  @Input() catalog: CatalogCategory[] = [];

  @Output() productSelected = new EventEmitter<Product>();

  selectedCategory = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['catalog'] && !this.selectedCategory && this.catalog.length) {
      this.selectedCategory = this.catalog[0].id;
    }
  }

  get activeCategory(): CatalogCategory | undefined {
    return this.catalog.find((category) => category.id === this.selectedCategory) ?? this.catalog[0];
  }
}
