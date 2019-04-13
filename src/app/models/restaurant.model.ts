import { RestaurantCoords } from './restaurat-coords.model';
import { Review } from './restaurant-review.model';
import { Address } from './address.model';

export class Restaurant {
    public id: number;
    public name: string;
    public neighborhood: string;
    public photo: string;
    public address: Address;
    public latlng: RestaurantCoords;
    public cuisineType: string;
    public openingHours: {[key: string]: string };
    public reviews: Review[];
}
