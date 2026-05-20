export interface Product {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  image: string;
}

export interface CatalogCategory {
  id: string;
  label: string;
  eyebrow: string;
  products: Product[];
}

export interface WizardOption {
  id: string;
  label: string;
  icon: string;
}

export interface QuoteSelection {
  type: string;
  product: string;
}
