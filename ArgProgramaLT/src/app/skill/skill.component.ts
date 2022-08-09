import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillService } from '../services/skill.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public skills:Skill[]=[];
  public updateSkills:Skill | undefined;
  public deleteSkills:Skill | undefined;

  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  public getSkills():void{
    this.skillService.getSkill().subscribe({
      next: (response: Skill[]) =>{
        this.skills=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onClickUpdate(skill:Skill):void{
    this.updateSkills=skill;
    console.log("------------------On click update------------------")
    console.log(this.updateSkills)
    console.log("---------------------------------------------------")
  }
  public onClickDelete(skill:Skill):void{
    this.deleteSkills=skill;
    console.log("------------------On click delete------------------")
    console.log(this.deleteSkills)
    console.log("---------------------------------------------------")
  }

  public onAddSkill(addForm:NgForm):void{
    document.getElementById('addSkillForm')?.click();
    this.skillService.addSkill(addForm.value).subscribe({
      next: (response: Skill) =>{
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateSkill(skill:Skill):void{
    this.updateSkills=skill;
    console.log("------------------Metodo on Update------------------")
    console.log(skill)
    console.log("--------------------------------------------------------------")
    this.skillService.updateSkill(skill).subscribe({
      next: (response: Skill) =>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteSkill(idSkill:number):void{
    this.skillService.deleteSkill(idSkill).subscribe({
      next: (response: void) =>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
