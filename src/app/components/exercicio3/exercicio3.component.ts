import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio3',
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio3.component.html',
  styleUrl: './exercicio3.component.css'
})
export class Exercicio3Component {

  idade: number = 0; 

  aumentarIdade(): void {
    this.idade++; 
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }

  verificarIdade(): void {
    if (this.idade < 0) {
      this.idade = 0; // Garante que a idade não seja negativa
    }
  }
}
