import { Component } from '@angular/core';
import MockMercadoItem, { IMercadoItem } from '../itens-mock';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  protected mockItem: IMercadoItem[] = []

  constructor () {
    this.mockItem = MockMercadoItem;
  }
}
