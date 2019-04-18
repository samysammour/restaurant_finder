import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Favourite } from '../models/favourite.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public getAll(): Observable<Favourite[]> {
        return this.http.get(`${this.baseUrl}/api/Favourite?clientId=${this.clientId}`).pipe(
            map((res: Favourite[]) => res)
        );
    }

    public add(favourite: Favourite): Observable<Favourite> {
        favourite.clientId = this.clientId;
        return this.http.post(`${this.baseUrl}/api/Favourite`, favourite, { headers: this.headers }).pipe(
            map((res: Favourite) => res)
        );
    }

    public delete(id: number): Observable<Favourite[]> {
        return this.http.delete(`${this.baseUrl}/api/Favourite?id=${id}&clientId=${this.clientId}`).pipe(
            map((res: Favourite[]) => res)
        );
    }
}
