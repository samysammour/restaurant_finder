import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    constructor(private http: HttpClient) { }

    public getAll(): Observable<Restaurant[]> {
        return this.http.get('assets/restaurant-data.json').pipe(
            map((res: any) => <Restaurant[]> res.restaurants)
        );
    }

    public getById(id: string): Observable<Restaurant> {
        return this.http.get('assets/restaurant-data.json').pipe(
            map((res: any) => <Restaurant> res.restaurants.find((x: { id: number; }) => x.id === parseInt(id, 10)))
        );
    }
}
