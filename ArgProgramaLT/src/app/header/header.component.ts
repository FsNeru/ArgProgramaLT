import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/models/datos';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public datos : Datos|undefined;
  public updateDatos:Datos | undefined;

  constructor(
    private headerService: HeaderService,
    private autenticacionService: AutenticacionService
  ) {}
  isloged = () => this.autenticacionService.loggedIn();

  ngOnInit(): void {
    this.getDatos();
  }

  public getDatos():void{
    this.headerService.getDatos().subscribe({
      next: (response: Datos) =>{
        this.datos=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onClickUpdate(datos:Datos):void{
    this.updateDatos=datos;
    console.log("------------------On click update------------------")
    console.log(this.updateDatos)
    console.log("---------------------------------------------------")
  }

  public onUpdateDatos(datos:Datos):void{
    this.updateDatos=datos;
    console.log("------------------Metodo on Update------------------")
    console.log(datos)
    console.log("----------------------------------------------------")
    this.headerService.updateDatos(datos).subscribe({
      next: (response: Datos) =>{
        this.getDatos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



}
