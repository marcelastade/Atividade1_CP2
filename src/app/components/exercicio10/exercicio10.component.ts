import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio10',
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio10.component.html',
  styleUrl: './exercicio10.component.css'
})
export class Exercicio10Component {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string = '';
}