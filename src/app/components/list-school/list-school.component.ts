import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {

  schoolList:any=[]
  constructor(public schoolService:SchoolService, private router:Router) { }

  ngOnInit(): void {
    this.loadSchools();
  }
  loadSchools(){
    return this.schoolService.GetSchool().subscribe((data:{})=>{
      this.schoolList=data;
    })
  }
  deleteSchool(id:number){
    this.schoolService.deleteSchool(id).subscribe((response)=>{
      this.loadSchools();
    })
  }

  oneEdit(school:School){
    console.log(school);
    this.schoolService.selectSchool=Object.assign({},school);
    this.router.navigate(["/add-school"]);
  }
}
