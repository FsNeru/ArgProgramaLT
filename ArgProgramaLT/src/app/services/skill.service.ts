import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill`)
  }
  public addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skill`,skill);

  }
  public updateSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skill`, skill)
  }
  public deleteSkill(skillId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/skill/${skillId}`)
  }
}
