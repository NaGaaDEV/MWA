import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  #_apiBaseUrl = "http://localhost:3000/api/";

  constructor(private httpClient:HttpClient) { }

  // getGames():Observable<Game[]> {
  //   return this.httpClient.get<Game[]>(this.#_apiBaseUrl+"games");
  // }

  // getGame(id:string):Observable<Game> {
  //   return this.httpClient.get<Game>(this.#_apiBaseUrl+"games/"+id);
  // }

  addUser(user:User):Observable<User> {
    return this.httpClient.post<User>(this.#_apiBaseUrl+"users", user);
  }

  // deleteGame(id:string):Observable<any> {
  //   return this.httpClient.delete(this.#_apiBaseUrl+"users/"+id);
  // }
}

export class User {
  #_id!: string;
	#name!: string;
	#username!: string;
	#password!: string;

  set _id(id:string) { this.#_id = id; }
  get _id() { return this.#_id; }
  set name(name:string) { this.#name = name; }
  get name() { return this.#name; }
  set username(username:string) { this.#username = username; }
  get username() { return this.#username; }
  set password(password:string) { this.#password = password; }
  get password() { return this.#password; }

  constructor( id: string, name: string, username: string, password: string) {
    this.#_id = id;
    this.#name = name;
    this.#username = username;
    this.#password = password;
  }
}
