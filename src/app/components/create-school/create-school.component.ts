import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  constructor(
    public schoolService:SchoolService,
    private router:Router) { }

  ngOnInit(): void {

  }
  submitForm(schoolForm:NgForm){
    this.schoolService.CreateSchool(schoolForm.value).subscribe((response)=>{
      this.router.navigate([""]);
    });
    this.resetForm(schoolForm);
  }
  resetForm(schoolForm:NgForm){
    if(schoolForm!=null){
      schoolForm.reset();
      this.schoolService.selectSchool=new School();
    }
  }


}
