import { Component, Input } from '@angular/core';
import MockItemComidas, { IComidaItem } from '../comidas-mock';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent {
  @Input()
  comida!: IComidaItem
}
