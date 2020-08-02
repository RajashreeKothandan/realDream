import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  GalleryDetails:any;
  constructor(private http:HttpClient) { 

     this.http.get("../../assets/Data/GalleryDetails.json").subscribe(
       data=>{this.GalleryDetails=data;})
  }

  ngOnInit() {
  }

}
