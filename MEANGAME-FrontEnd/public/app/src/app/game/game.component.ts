import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Game, GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  #_item!:Game;
  constructor(private gameDataService:GamesDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.params["gameId"];
    this.gameDataService.getGame(gameId).subscribe({
      next: item => { this.#_item = item; },
      error: err => console.log("Service error", err),
      complete: () => console.log("Game retrived")
    })
  }

  onDelete(id:string):void {
    this.gameDataService.deleteGame(id).subscribe({
      error: err => console.log("Service error", err),
      complete: () => this.router.navigate(["games"])
    })
  }

  set item(item:Game) { this.#_item = item }
  get item() { return this.#_item; }
}
