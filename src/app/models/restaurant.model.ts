import { RestaurantCoords } from './restaurat-coords.model';
import { Review } from './restaurant-review.model';

export class Restaurant {
    public id: string;
    public name: string;
    public neighborhood: string;
    public photo: string;
    public address: string;
    public latlng: RestaurantCoords;
    public cuisineType: string;
    public openingHours: {[key: string]: string };
    public reviews: Review[];
}
