import { Component } from '@angular/core';
import MockMercadoItem, { IMercadoItem } from './itens-mock';


@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {

  protected mockItem: IMercadoItem[] = []
  clickedItem?: IMercadoItem
  isClicked:boolean = false

  constructor () {
    this.mockItem = MockMercadoItem;
  }

  openModal(item:IMercadoItem){
    console.log(item.id)
    this.clickedItem = item
    this.isClicked = true
    // console.log(Exit)
  }

  closeModal () {
    this.isClicked = false
  }

}
