/* Angular */
import { Component } from '@angular/core';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-design',
  imports: [],
  templateUrl: './design.html',
  styleUrl: './design.css',
})
export class Design {
  constructor(
    /* Service */ public screen: Screen,
  ) {}
}
