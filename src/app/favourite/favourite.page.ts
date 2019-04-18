import { Component, OnInit } from '@angular/core';
import { Favourite } from '../models/favourite.model';
import { FavouriteService } from '../services/favourite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  public favs: Favourite[];

  constructor(private favService: FavouriteService, private router: Router) {
    this.favs = new Array<Favourite>();
  }

  ngOnInit() {
    this.getFavourites();
  }

  ionViewWillEnter() {
    this.getFavourites();
  }

  public showRestaurant(id: number) {
    this.router.navigateByUrl(`/tabs/favourite/preview/${id}`);
  }

  public deleteFromFavourite(id: number) {
    this.favService.delete(id).subscribe((favs: Favourite[]) => {
      this.favs = favs;
    });
  }

  private getFavourites() {
    this.favService.getAll().subscribe(x => this.favs = x);
  }

}
