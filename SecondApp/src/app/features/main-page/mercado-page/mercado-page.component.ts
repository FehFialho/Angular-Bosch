import { Component } from '@angular/core';
import MockMercadoItem, { IMercadoItem } from './itens-mock';


@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mockItem: IMercadoItem[] = []

  constructor () {
    this.mockItem = MockMercadoItem;
  }
}
