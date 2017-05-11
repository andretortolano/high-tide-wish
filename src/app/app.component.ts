import { Component, OnInit } from '@angular/core';
import * as mtg from 'mtgsdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _cardUrl: string;

  ngOnInit() {
    mtg.card.find(3).then(result => {
      console.log(result.card.name); // "Black Lotus"
      console.log(result.card.imageUrl);
      this.cardUrl = result.card.imageUrl;
    });

    mtg.set.find('AER')
      .then(result => {
        console.log(result.set.name);
        console.log(result.set.booster); // "Aether Revolt"
      });
  }

  public get cardUrl(): string {
    return this._cardUrl;
  }

  public set cardUrl(cardUrl: string){
    this._cardUrl = cardUrl;
  }

}
