import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceStepComponent } from '@components/service-step/service-step.component';

const ICON = `<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9L10.6667 14.3333L8.00004 11.6667M22.6667 5.2666V10.5531C22.6667 19.3108 16.0426 23.2371 13.2344 24.5082C12.9367 24.643 12.7888 24.7104 12.4519 24.7683C12.2393 24.8048 11.7617 24.8048 11.5492 24.7683C11.2122 24.7104 11.063 24.643 10.7653 24.5082C7.9571 23.2371 1.33337 19.3107 1.33337 10.5531V5.2666C1.33337 3.77313 1.33337 3.02649 1.62402 2.45605C1.87969 1.95429 2.28734 1.54631 2.7891 1.29065C3.35953 1 4.10683 1 5.6003 1H18.4003C19.8938 1 20.64 1 21.2104 1.29065C21.7122 1.54631 22.1207 1.95429 22.3763 2.45605C22.667 3.02649 22.6667 3.77313 22.6667 5.2666Z" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

@Component({
  selector: 'app-home-services-section',
  standalone: true,
  imports: [ServiceStepComponent, MatIconModule, CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'list-icon',
      sanitizer.bypassSecurityTrustHtml(ICON)
    );
  }
}
