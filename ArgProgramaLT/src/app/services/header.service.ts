import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`,{headers : {
      "Content-Type": "application/json; charset = utf-8;"
  }
})
  }
  public updateUser(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario)
  }

}
