import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const DATA_KEY = makeStateKey<any>('embalses');

@Injectable({
  providedIn: 'root'
})
export class EmbalsesService {

  jwtToken: string = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc0NTYxOTgyMCwiZXhwIjoxNzQ1NjIwMTgwfQ.PZTkH57hdHNz8rFM9RU85zYrvGKHPon0Dq8coqhpvXFFsa52jQDHgwttg-Pr6wRr";
  embalsesUrl: string = "http://localhost:8080/embalse";

  constructor(private http: HttpClient, private state: TransferState) {}

  getEmbalses(): Observable<any[]> {
    // Intentar obtener los datos del estado de transferencia
    const storedData = this.state.get(DATA_KEY, null);
    if (storedData) {
      return new Observable(observer => {
        observer.next(storedData); // Devuelve los datos almacenados
      });
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtToken}`,  // Añadir el token en el header Authorization
    });

    // Si no hay datos en el estado, hace la petición HTTP
    return this.http.get<any[]>(this.embalsesUrl, {headers} ).pipe(
      tap(data => {
        this.state.set(DATA_KEY, data); // Guarda los datos para el cliente
      })
    );
  }
}
