import { Component } from '@angular/core';
import MockPessoas, { IPessoa } from './pessoas-mock';
import MockItemComidas, { IComidaItem } from './comidas-mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComidaItem[] = []

  constructor () {
    this.comidas = MockItemComidas;
  }
}
