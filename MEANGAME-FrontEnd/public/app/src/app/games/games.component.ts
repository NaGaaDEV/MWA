import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game, GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  #_list!: Game[];
  newGameFormGroup!:FormGroup;
  saveGameMessage!:string;

  constructor(private gamesDataService:GamesDataService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getGames();
    this.newGameFormGroup = this.formBuilder.group({
      "title": this.formBuilder.control(""),
      "rate": this.formBuilder.control(5),
      "price": this.formBuilder.control(""),
      "year": this.formBuilder.control(""),
      "minPlayers": this.formBuilder.control(""),
      "maxPlayers": this.formBuilder.control(""),
      "minAge": this.formBuilder.control("")
    });
    this.saveGameMessage = "";
  }

  private getGames() {
    this.gamesDataService.getGames().subscribe({
      next: list => { this.#_list = list; },
      error: err => console.log("Service error", err),
      complete: () => console.log("Games retrived")
    });
  }

  onAddGame():void {
    console.log("on Addd");
    
    this.gamesDataService.addGame(this.newGameFormGroup.value).subscribe({
      next: game => { this.#_list.push(game); },
      error: err => console.log("Service error", err),
      complete: () => this.onAddGameComplete()
    })
  }

  onDelete(id:string):void {
    this.gamesDataService.deleteGame(id).subscribe({
      error: err => console.log("Service error on delete", err),
      complete: () => this.getGames()
    });
  }

  get list() { return this.#_list; }

  onAddGameComplete():void {
    this.newGameFormGroup.reset();
    this.saveGameMessage = "Game saved."
  }
}
