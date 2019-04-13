import { Component, OnInit } from '@angular/core';
import { Favourite } from '../models/favourite.model';
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  public favs: Favourite[];

  constructor(private favService: FavouriteService) {
    this.favs = new Array<Favourite>();
  }

  ngOnInit() {
    this.favService.getAll().subscribe(x => this.favs = x);
  }

}
