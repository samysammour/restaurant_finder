import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { ReviewsComponent } from '../reviews/reviews.component';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.page.html',
  styleUrls: ['./restaurant-card.page.scss']
})
export class RestaurantCardPage implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private alertController: AlertController, private photoViewer: PhotoViewer, private modalController: ModalController) { }

  ngOnInit() {
  }

  public async showAlert() {
    if (this.restaurant.openingHours) {
      let text = '';
      text += 'Monday: ' + this.restaurant.openingHours.monday + '<br />';
      text += 'Tuesday: ' + this.restaurant.openingHours.tuesday + '<br />';
      text += 'Wednesday: ' + this.restaurant.openingHours.wednesday + '<br />';
      text += 'Thursday: ' + this.restaurant.openingHours.thursday + '<br />';
      text += 'Friday: ' + this.restaurant.openingHours.friday + '<br />';
      text += 'Saturday: ' + this.restaurant.openingHours.saturday + '<br />';
      text += 'Sunday: ' + this.restaurant.openingHours.sunday + '<br />';

      const alert = await this.alertController.create({
        header: 'Opening Hours',
        message: text,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  public async showReviews() {
    const modal = await this.modalController.create({
      component: ReviewsComponent,
      componentProps: {
        'reviews': this.restaurant.reviews,
        'name': this.restaurant.name
      }
    });

    modal.present();
  }

  public openPhoto(image: string) {
    // this.photoViewer.show(image);
    this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
  }
}
