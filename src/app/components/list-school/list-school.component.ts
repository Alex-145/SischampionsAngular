import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {

  schoolList:any=[]
  constructor(public schoolService:SchoolService) { }

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
}
