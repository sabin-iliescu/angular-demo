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
  playerScore = 0;
  computerScore = 0;

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
  
    const winConditions = {
      Rock: 'Scissors',
      Paper: 'Rock',
      Scissors: 'Paper',
    };
  
    if (winConditions[this.playerChoice as keyof typeof winConditions] === this.computerChoice) {
      this.playerScore++;
      return 'You win!';
    } else {
      this.computerScore++;
      return 'You lose!';
    }
  }
  
}
