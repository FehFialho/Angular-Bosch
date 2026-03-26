import { Component } from '@angular/core';
import MockItemComidas, { IComidaItem } from './comidas-mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  
  protected comidas: IComidaItem[] = []
  protected focusedFood?: IComidaItem; 

  constructor () {
    this.comidas = MockItemComidas;
  }

  onCardClick = (item: IComidaItem) => {
    this.focusedFood = item
  }

  save = () => {
    alert('Pedido efetuado com sucesso!')
  }
}
