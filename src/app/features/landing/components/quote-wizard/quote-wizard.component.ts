import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardOption } from '../../../../shared/models/demo.models';
import { WhatsappService } from '../../../../core/services/whatsapp.service';

@Component({
  selector: 'app-quote-wizard',
  templateUrl: './quote-wizard.component.html',
  styleUrls: ['./quote-wizard.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush // Optimización para evitar re-renders innecesarios en Ionic
})
export class QuoteWizardComponent implements OnInit {
  @Input() whatsappNumber = '';
  @Input() curtainTypes: WizardOption[] = [];
  @Input() environments: WizardOption[] = [];
  @Input() selectedType = 'Roller';
  @Input() selectedProduct = 'Roller Blackout';

  quoteForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly whatsappService: WhatsappService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.quoteForm = this.fb.group({
      curtainType: [this.selectedType, [Validators.required]],
      environment: ['Sala', [Validators.required]],
      width: [2, [Validators.required, Validators.min(0.4)]],
      height: [1.8, [Validators.required, Validators.min(0.4)]]
    });
  }

  // Getter helper para que el HTML acceda limpiamente a los valores reactivos
  get formValues() {
    return this.quoteForm ? this.quoteForm.value : {};
  }

  // Re-calcula la URL de WhatsApp de forma reactiva al cambiar el formulario
  get whatsappUrl(): string {
    if (!this.quoteForm || this.quoteForm.invalid) {
      return '#';
    }

    return this.whatsappService.generateQuoteUrl(this.whatsappNumber, {
      curtainType: this.formValues.curtainType,
      environment: this.formValues.environment,
      width: this.formValues.width,
      height: this.formValues.height,
      productName: this.selectedProduct // Mantiene consistencia con la prop externa de la card
    });
  }

  // Método helper para actualizar campos del formulario desde los botones custom del Wizard
  setControlValue(controlName: string, value: string): void {
    this.quoteForm.get(controlName)?.setValue(value);
  }
}