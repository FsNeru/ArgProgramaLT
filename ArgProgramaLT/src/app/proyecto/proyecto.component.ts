import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyectos:Proyecto[]=[];

  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos();
  }
  public getProyectos():void{
    this.proyectoService.getProyecto().subscribe({
      next: (response: Proyecto[]) =>{
        this.proyectos=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
