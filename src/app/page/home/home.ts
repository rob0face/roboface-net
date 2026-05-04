/* Angular */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-home',
  imports: [
    /* Angular */ RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    /* Service */ public screen: Screen,
  ) {}
}
