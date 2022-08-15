import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Datos } from '../models/datos';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDatos():Observable<Datos>{
    return this.http.get<Datos>(`${this.apiServerUrl}/api/datos/1`);
  }

  public updateDatos(datos:Datos):Observable<Datos>{
    return this.http.put<Datos>(`${this.apiServerUrl}/api/datos`, datos)
  }

}
