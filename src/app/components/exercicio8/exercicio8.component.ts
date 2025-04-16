import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio8',
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio8.component.html',
  styleUrl: './exercicio8.component.css'
})
export class Exercicio8Component {
  email = '';
  senha = '';
}
