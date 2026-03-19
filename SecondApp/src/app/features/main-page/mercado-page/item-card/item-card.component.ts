import { Component, Input } from '@angular/core';
import MockMercadoItem, { IMercadoItem } from '../itens-mock';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input()
  item!: IMercadoItem
  
  defaultImage: string = 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image';
}
//anna