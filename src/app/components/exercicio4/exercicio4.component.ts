import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  imports: [],
  templateUrl: './exercicio4.component.html',
  styleUrl: './exercicio4.component.css'
})
export class Exercicio4Component {
  // Lista inicial de tarefas
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];

  // Método para remover uma tarefa com base no índice
  removerTarefa(index: number): void {
    this.tarefas.splice(index, 1);
  }
}