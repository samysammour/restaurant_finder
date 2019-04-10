import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinderPage } from './finder.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantCardPage } from './restaurant-card/restaurant-card.page';
import { FindingRestaurantComponent } from './finding-restaurant/finding-restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: FinderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinderPage, RestaurantCardPage, FindingRestaurantComponent, ReviewsComponent],
  providers: [
    Geolocation
  ],
  entryComponents: [
    ReviewsComponent
  ],
})
export class FinderPageModule {}
