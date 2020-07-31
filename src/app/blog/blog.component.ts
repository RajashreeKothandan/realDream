import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  sidebarDetails:any;
  mainPageDetails:any;
  constructor(private http:HttpClient){
   
    this.http.get("../../assets/Data/sidebar.json").subscribe(data=>{this.sidebarDetails=data;})
   this.LoadPage("EventOne",Event);
    }
  
  ngOnInit() {

  }
  
  
  LoadPage(eventName:string,event:any){
   console.log(eventName);
   var url="../../assets/Data/"+eventName+".json";
   this.http.get(url).subscribe(
     data=>{this.mainPageDetails=data;})
   
  }
   
}
