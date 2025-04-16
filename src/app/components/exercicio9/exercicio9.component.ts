import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  imports: [],
  templateUrl: './exercicio9.component.html',
  styleUrl: './exercicio9.component.css'
})
export class Exercicio9Component {
  produtos = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false }
  ];

}
