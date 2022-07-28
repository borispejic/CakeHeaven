import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CakesList } from '../model/cakes.model';
import { ContactMessages } from '../model/messages.model';
import { Slideshow } from '../model/slideshow.model';
import { User } from '../model/user.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class CakeserviceService {
  constructor(private http: HttpClient) {}

  getCakes(params?: any): Observable<CakesList[]> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || 'asc')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseURL}/cakes`, queryParams).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new CakesList(elem))) || [];
      })
    );
  }

  getIngredients(): Observable<string[]> {
    return this.http.get(`${baseURL}/ingredients`).pipe(
      map((data: any) => {
        return data as Array<string>;
      })
    );
  }

  getOne(cakeId: number): Observable<CakesList> {
    return this.http.get(`${baseURL}/cakes/${cakeId}`).pipe(
      map((data: any) => {
        return new CakesList(data);
      })
    );
  }

  getUser(): Observable<User> {
    return this.http.get(`${baseURL}/user`).pipe(
      map((data: any) => {
        return new User(data[0]);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${baseURL}/user/${user._id}`, user).pipe(
      map((data: any) => {
        return new User(data);
      })
    );
  }

  postMessage(message: ContactMessages): Observable<ContactMessages> {
    return this.http.post(`${baseURL}/messages`, message).pipe(
      map((data: any) => {
        return new ContactMessages(data);
      })
    );
  }

  getSlideShow(): Observable<Slideshow[]> {
    return this.http.get(`${baseURL}/slideshow`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Slideshow(elem))) || [];
      })
    );
  }
}
