import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Game, GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {
  @ViewChild('searchFormGroup')
  searchFormGroup!: NgForm;

  games!:Game[];

  constructor(private formBuilder:FormBuilder, private gameDataService:GamesDataService) { }

  ngOnInit(): void {
    // this.searchFormGroup = new FormGroup({
    //   lng: new FormControl(),
    //   lat: new FormControl()
    // })

    // this.searchFormGroup = this.formBuilder.group({
    //   "search": this.formBuilder.control('')
    // })
  }

  onGeoSearch():void {
    this.gameDataService.geoSearchGame(this.searchFormGroup.value).subscribe({
      next: games => this.games = games,
      error: err => console.log("Service error", err),
      complete: () => console.log("Search done")
    })
  }

}
