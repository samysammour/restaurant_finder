import { Component, OnInit } from '@angular/core';

import { Geolocation, Coordinates } from '@ionic-native/geolocation/ngx';

import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.page.html',
  styleUrls: ['./finder.page.scss'],
})
export class FinderPage implements OnInit {
  public coords: Coordinates;
  public restaurants: Restaurant[];
  public loading: boolean;

  constructor(private geolocation: Geolocation, private servivce: RestaurantService) {
    this.loading = false;
    this.coords = <Coordinates> {
      latitude: 0,
      longitude: 0
    };
    this.restaurants = new Array<Restaurant>();
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     this.getAllRestaurants();
  }

  private async getAllRestaurants() {
    this.loading = true;
    setTimeout(() => this.servivce.getAll().subscribe(async (res: Restaurant[]) => {
      this.restaurants = res;
      this.loading = false;
    }), 100);
  }
}
