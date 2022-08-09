import { Component, OnInit } from '@angular/core';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../services/educacion.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educaciones:Educacion[]=[];
  public updateEducaciones:Educacion | undefined;
  public deleteEducaciones:Educacion | undefined;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }
  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe({
      next: (response: Educacion[]) =>{
        this.educaciones=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onClickUpdate(educacion:Educacion):void{
    this.updateEducaciones=educacion;
    console.log("------------------On click update------------------")
    console.log(this.updateEducaciones)
    console.log("---------------------------------------------------")
  }
  public onClickDelete(educacion:Educacion):void{
    this.deleteEducaciones=educacion;
    console.log("------------------On click delete------------------")
    console.log(this.deleteEducaciones)
    console.log("---------------------------------------------------")
  }

  public onAddEducacion(addForm:NgForm):void{
    document.getElementById('addEducacionForm')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response: Educacion) =>{
        console.log(response);
        this.getEducaciones();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateEducacion(educacion:Educacion):void{
    this.updateEducaciones=educacion;
    console.log("------------------Metodo on Update------------------")
    console.log(educacion)
    console.log("--------------------------------------------------------------")
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response: Educacion) =>{
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteEducacion(idEducacion:number):void{
    this.educacionService.deleteEducacion(idEducacion).subscribe({
      next: (response: void) =>{
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
