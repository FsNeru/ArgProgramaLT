import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../services/experiencia.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias:Experiencia[]=[];

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }
  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next: (response: Experiencia[]) =>{
        this.experiencias=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}

