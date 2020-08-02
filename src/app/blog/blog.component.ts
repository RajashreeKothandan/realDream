import { Component, OnInit } from '@angular/core';
//import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {service} from './../Models/Service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  sidebarDetails:any;
  mainPageDetails:service[];
  currentService:service;
  constructor(private http:HttpClient){
   
    this.http.get("../../assets/Data/sidebar.json").subscribe(data=>{this.sidebarDetails=data;})
   this.LoadPage("Sponsorship",Event);
    }
  
  ngOnInit() {

  }
  
  
  LoadPage(ServiceName:string,event:any){
   console.log(ServiceName);
   var url="../../assets/Data/Services.json";
   this.http.get(url).subscribe(
     data=>{this.mainPageDetails=<service[]>data;
      this.currentService=this.mainPageDetails.find(x=>x.ServiceName==ServiceName);
    })
   
  }
   
}
