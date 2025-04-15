import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio5',
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio5.component.html',
  styleUrl: './exercicio5.component.css'
})
export class Exercicio5Component {

  status: string = ''; // Status inicial
}