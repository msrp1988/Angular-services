import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    public mediaService:MediaService
  ) { }
  cars:any;
  someProperty:string = '';
  addDetails:string = '';
  getData:any;
  results:any;
  records:any;
  myObj: any;
  item:any;
  index:any;
  
 
  ngOnInit() {
    console.log(this.mediaService.cars);
    this.someProperty = this.mediaService.myData();
    this.addDetails = this.mediaService.addDetails();
    this.getData = this.mediaService.getData();
    this.cars = this.mediaService.cars;
    this.records = this.mediaService.records();
    this.myObj = this.mediaService.myObj();
  }

}
