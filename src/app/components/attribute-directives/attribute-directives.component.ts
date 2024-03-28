import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css',
})
export class AttributeDirectivesComponent {
  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
