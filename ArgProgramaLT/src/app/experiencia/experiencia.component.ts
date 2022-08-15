import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../services/experiencia.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias:Experiencia[]=[];
  public updateExperiencias:Experiencia | undefined;
  public deleteExperiencias:Experiencia | undefined;

  constructor(
    private experienciaService:ExperienciaService,
    private autenticacionService: AutenticacionService
    ) {}
    isloged = () => this.autenticacionService.loggedIn();

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
  public onClickUpdate(educacion:Experiencia):void{
    this.updateExperiencias=educacion;
    console.log("------------------On click update------------------")
    console.log(this.updateExperiencias)
    console.log("---------------------------------------------------")
  }
  public onClickDelete(educacion:Experiencia):void{
    this.deleteExperiencias=educacion;
    console.log("------------------On click delete------------------")
    console.log(this.deleteExperiencias)
    console.log("---------------------------------------------------")
  }

  public onAddExperiencia(addForm:NgForm):void{
    document.getElementById('addExperienciaForm')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next: (response: Experiencia) =>{
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateExperiencia(experiencia:Experiencia):void{
    this.updateExperiencias=experiencia;
    console.log("------------------Metodo on Update------------------")
    console.log(experiencia)
    console.log("--------------------------------------------------------------")
    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next: (response: Experiencia) =>{
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteExperiencia(idExperiencia:number):void{
    this.experienciaService.deleteExperiencia(idExperiencia).subscribe({
      next: (response: void) =>{
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}


