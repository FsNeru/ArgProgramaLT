import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyectos:Proyecto[]=[];
  public updateProyectos:Proyecto | undefined;
  public deleteProyectos:Proyecto | undefined;

  constructor(
    private proyectoService:ProyectoService,
    private autenticacionService: AutenticacionService
    ) {}
    isloged = () => this.autenticacionService.loggedIn();

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
  public onClickUpdate(proyecto:Proyecto):void{
    this.updateProyectos=proyecto;
    console.log("------------------On click update------------------")
    console.log(this.updateProyectos)
    console.log("---------------------------------------------------")
  }
  public onClickDelete(proyecto:Proyecto):void{
    this.deleteProyectos=proyecto;
    console.log("------------------On click delete------------------")
    console.log(this.deleteProyectos)
    console.log("---------------------------------------------------")
  }

  public onAddProyecto(addForm:NgForm):void{
    document.getElementById('addProyectoForm')?.click();
    this.proyectoService.addProyecto(addForm.value).subscribe({
      next: (response: Proyecto) =>{
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateProyecto(proyecto:Proyecto):void{
    this.updateProyectos=proyecto;
    console.log("------------------Metodo on Update------------------")
    console.log(proyecto)
    console.log("--------------------------------------------------------------")
    this.proyectoService.updateProyecto(proyecto).subscribe({
      next: (response: Proyecto) =>{
        console.log(response);
        this.getProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProyecto(idProyecto:number):void{
    this.proyectoService.deleteProyecto(idProyecto).subscribe({
      next: (response: void) =>{
        console.log(response);
        this.getProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
