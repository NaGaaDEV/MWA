import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  #_apiBaseUrl = "http://localhost:3000/api/";

  constructor(private httpClient:HttpClient) { }

  getGames():Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.#_apiBaseUrl+"games");
  }

  getGame(id:string):Observable<Game> {
    return this.httpClient.get<Game>(this.#_apiBaseUrl+"games/"+id);
  }

  addGame(game:Game):Observable<Game> {
    return this.httpClient.post<Game>(this.#_apiBaseUrl+"games", game);
  }

  deleteGame(id:string):Observable<any> {
    return this.httpClient.delete(this.#_apiBaseUrl+"games/"+id);
  }
}

export class Game {
  #_id!: string;
	#title!: string;
	#year!: string;
	#rate!: number;
	#price!: number;
	#minPlayers!: number;
	#maxPlayers!: number;
	#minAge!: number;

  set _id(id:string) { this.#_id = id; }
  get _id() { return this.#_id; }
  set title(title:string) { this.#title = title; }
  get title() { return this.#title; }
  set year(year:string) { this.#year = year; }
  set rate(rate:number) { this.#rate = rate; }
  get rate() { return this.#rate; }
  set price(price:number) { this.#price = price; }
  set minPlayers(minPlayers:number) { this.#minPlayers = minPlayers; }
  set maxPlayers(maxPlayers:number) { this.#maxPlayers = maxPlayers; }
  set minAge(minAge:number) { this.#minAge = minAge; }

  constructor( id: string, title: string, rate: number) {
    this.#_id = id;
    this.#title = title;
    this.#rate = rate;
  }
}