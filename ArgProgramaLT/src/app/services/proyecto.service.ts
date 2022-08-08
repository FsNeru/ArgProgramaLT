import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/proyecto/all`)
  }
  public addProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/proyecto/add`,proyecto);

  }
  public updateProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/proyecto/update`, proyecto)
  }
  public deleteProyecto(proyectoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyecto/delete/${proyectoId}`)
  }
}
