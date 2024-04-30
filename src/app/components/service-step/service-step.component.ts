import { Component, Input } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-components-service-step',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './service-step.component.html',
  styleUrl: './service-step.component.scss'
})
export class ServiceStepComponent {
  @Input({
    alias: "icon-name"
  })
  public iconName: string = "";
  @Input()
  public description: string = "";
}
