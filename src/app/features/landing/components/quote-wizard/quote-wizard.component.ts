import { Component, Input } from '@angular/core';

import { WizardOption } from '../../../../shared/models/demo.models';
import { formatMeters } from '../../../../shared/utils/quote.utils';

@Component({
  selector: 'app-quote-wizard',
  templateUrl: './quote-wizard.component.html',
  styleUrls: ['./quote-wizard.component.scss'],
  standalone: false,
})
export class QuoteWizardComponent {
  @Input() whatsappNumber = '';
  @Input() curtainTypes: WizardOption[] = [];
  @Input() environments: WizardOption[] = [];
  @Input() selectedType = 'Roller';
  @Input() selectedProduct = 'Roller Blackout';

  selectedEnvironment = 'Sala';
  width = 2;
  height = 1.8;

  get whatsappUrl(): string {
    const message = `Hola, me interesa una cotizacion para una cortina ${this.selectedType} para ${this.selectedEnvironment}, medidas aprox: ${formatMeters(this.width)}m x ${formatMeters(this.height)}m. Vi este modelo en su web: ${this.selectedProduct}.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
