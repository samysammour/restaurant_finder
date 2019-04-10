import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/restaurant-review.model';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  @Input() name: string;
  @Input() reviews: Review[];

  constructor(navParams: NavParams, private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
