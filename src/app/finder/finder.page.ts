import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';
import { FavouriteService } from '../services/favourite.service';
import { Favourite } from '../models/favourite.model';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.page.html',
  styleUrls: ['./finder.page.scss'],
})
export class FinderPage implements OnInit {
  public restaurants: Restaurant[];
  public favs: Favourite[];
  public loading: boolean;

  constructor(private servivce: RestaurantService, private favService: FavouriteService) {
    this.loading = false;
    this.restaurants = new Array<Restaurant>();
    this.favs = new Array<Favourite>();
  }

  ngOnInit() {
     this.getAllRestaurants();
     this.getFavourites();
  }

  ionViewWillEnter() {
    this.getFavourites();
  }

  private getAllRestaurants() {
    this.loading = true;
    this.servivce.getAll().subscribe((res: Restaurant[]) => {
      this.restaurants = res;
      this.loading = false;
    });
  }

  public getFavourites() {
    this.favService.getAll().subscribe((fav: Favourite[]) => {
      this.favs = fav;
    });
  }
}
