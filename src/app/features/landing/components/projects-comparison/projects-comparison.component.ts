import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Añade esto para directivas básicas

@Component({
  selector: 'app-projects-comparison',
  templateUrl: './projects-comparison.component.html',
  styleUrls: ['./projects-comparison.component.scss'],
  standalone: true,                          // <--- CLAVE: Declarar que es standalone
  imports: [CommonModule]                     // <--- CLAVE: Importar dependencias locales aquí
})
export class ProjectsComparisonComponent {
  comparison: number = 50;
  @Input() beforeImage: string = '';
  @Input() afterImage: string = '';

  private isDragging: boolean = false;

  startDragging(event: PointerEvent): void {
    this.isDragging = true;
    this.updateSliderPosition(event);
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
  }

  onDragging(event: PointerEvent): void {
    if (!this.isDragging) return;
    this.updateSliderPosition(event);
  }

  stopDragging(): void {
    this.isDragging = false;
  }

  private updateSliderPosition(event: PointerEvent): void {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;

    this.comparison = percentage;
  }
}