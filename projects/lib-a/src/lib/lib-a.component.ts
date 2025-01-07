import { Component } from '@angular/core';

@Component({
  selector: 'example-library',
  template: `
    <strong> The library component! With <lib-common></lib-common> </strong>
  `,
  standalone: false,
  styleUrls: ['./lib-a.component.css'],
})
export class LibAComponent {}
