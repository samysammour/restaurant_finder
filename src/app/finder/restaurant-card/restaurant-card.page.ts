import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { ReviewsComponent } from '../reviews/reviews.component';
import { Restaurant } from '../../models/restaurant.model';
import { Router } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Favourite } from 'src/app/models/favourite.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.page.html',
  styleUrls: ['./restaurant-card.page.scss']
})
export class RestaurantCardPage implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() favs: Favourite[];

  @Output() favClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private alertController: AlertController, private photoViewer: PhotoViewer, private router: Router,
              private favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  public async showAlert() {
    let text = '';
    text += 'Monday: ' + this.restaurant.monday + '<br />';
    text += 'Tuesday: ' + this.restaurant.tuesday + '<br />';
    text += 'Wednesday: ' + this.restaurant.wednesday + '<br />';
    text += 'Thursday: ' + this.restaurant.thursday + '<br />';
    text += 'Friday: ' + this.restaurant.friday + '<br />';
    text += 'Saturday: ' + this.restaurant.saturday + '<br />';
    text += 'Sunday: ' + this.restaurant.sunday + '<br />';

    const alert = await this.alertController.create({
      header: 'Opening Hours',
      message: text,
      buttons: ['OK'],
    });

    await alert.present();
  }

  public async showReviews() {
    this.router.navigateByUrl(`/tabs/finder/reviews/${this.restaurant.id}`);
  }

  public openPhoto(image: string) {
    this.photoViewer.show(image);
    // this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
  }

  public addToFavourite() {
    const fav = new Favourite();
    fav.id = this.restaurant.id;
    fav.name = this.restaurant.name;
    if (this.isFav()) {
      this.favouriteService.delete(fav.id).subscribe();
    } else {
      this.favouriteService.add(fav).subscribe();
    }
    this.favClick.emit();
  }

  public isFav(): boolean {
    return this.favs.find(x => x.restaurantId === this.restaurant.id) != null;
  }
}
