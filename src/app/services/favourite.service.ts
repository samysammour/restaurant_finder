import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Favourite } from '../models/favourite.model';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    private favourites: Favourite[];

    constructor() {
        this.favourites = new Array<Favourite>();
    }

    public getAll(): Observable<Favourite[]> {
        return of(this.favourites);
    }

    public add(favourite: Favourite): Observable<Favourite[]> {
        this.favourites.push(favourite);
        return this.getAll();
    }

    public delete(id: number): Observable<Favourite[]> {
        this.favourites = this.favourites.filter(x => x.id !== id);
        return this.getAll();
    }
}
