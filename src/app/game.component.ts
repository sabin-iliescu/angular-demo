import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  choices = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  play(playerChoice: string): void {
    this.playerChoice = playerChoice;
    this.computerChoice = this.getComputerChoice();
    this.result = this.determineWinner();
  }

  getComputerChoice(): string {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(): string {
    if (this.playerChoice === this.computerChoice) {
      return "It's a tie!";
    }

    if (
      (this.playerChoice === 'Rock' && this.computerChoice === 'Scissors') ||
      (this.playerChoice === 'Paper' && this.computerChoice === 'Rock') ||
      (this.playerChoice === 'Scissors' && this.computerChoice === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
}
