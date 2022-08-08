import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillService } from '../services/skill.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public skills:Skill[]=[];

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

}
