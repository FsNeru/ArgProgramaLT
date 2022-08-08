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
  public editEducaciones:Educacion | undefined;
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
  public onOpenModal(mode:String, educacion?:Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add'){
      button.setAttribute('data-target','#addEducacionModal')
    }
    else if (mode === 'delete'){
      this.deleteEducaciones=educacion;
      button.setAttribute('data-target','#deleteEducacionModal')
    }
    else if (mode === 'edit'){
      this.deleteEducaciones=educacion;
      button.setAttribute('data-target','#editEducacionModal')
    }
    container?.appendChild(button);
    button.click();
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
    this.editEducaciones=educacion;
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response: Educacion) =>{
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      },
    });
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
