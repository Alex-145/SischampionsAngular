import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.css']
})
export class ListPlaceComponent implements OnInit {

  placeList:any=[]
  constructor(public placeService:PlaceService, private router:Router) { }

  ngOnInit(): void {
    this.loadPlace();
  }
  loadPlace(){
    return this.placeService.GetPlace().subscribe((data:{})=>{
      console.log(data);
      this.placeList=data;
    })
  }
  deletePlace(id:number){
    this.placeService.deletePlace(id).subscribe((response)=>{
      this.loadPlace();
    })
  }

  onEdit(place:Place){
    console.log(place);
    this.placeService.selectPlace=Object.assign({},place);
    this.router.navigate(["/add-place"]);
  }
}
