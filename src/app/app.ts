/* Angular */
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
/* Service */
import { Screen } from './app.screen';

@Component({
  selector: 'app-root',
  imports: [
    /* Angular */ RouterOutlet, RouterLink, RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(
    /* Service */ public screen: Screen,
  ) {}

}
