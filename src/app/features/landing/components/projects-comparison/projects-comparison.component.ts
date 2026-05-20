import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-comparison',
  templateUrl: './projects-comparison.component.html',
  styleUrls: ['./projects-comparison.component.scss'],
  standalone: false,
})
export class ProjectsComparisonComponent {
  @Input() beforeImage = '';
  @Input() afterImage = '';

  comparison = 54;
}
