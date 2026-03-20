import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMercadoItem } from '../itens-mock';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent {
  @Input()
  item?: IMercadoItem

  @Output()
  Exit: EventEmitter<void> = new EventEmitter();
  // exit: boolean = false

  exitModal(){
    console.log("Fechando Modal")
    this.Exit.emit();
    console.log(this.Exit)
  }
}
