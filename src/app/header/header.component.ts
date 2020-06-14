import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
header:string;
  Navigate(event:any)
  {
    var id=event.srcElement.id;
    this.RemoveActive();
    switch(id)
    {
      case 'id_home': {
      this._router.navigate(['']);
      
       break;}
      case 'id_about': {
      this._router.navigate(['/about']);
      
      
      break;}
      case 'id_service': {
      this._router.navigate(['/services']);
      
      break;}
      case 'id_activity': {
      this._router.navigate(['/activities']);
    
      break;}
      case 'id_contact': {
      this._router.navigate(['/contact']);

      break;}
    }
    this.AddActive(id);
  }
  RemoveActive(){
document.getElementById("id_home").classList.remove("active");
document.getElementById("id_about").classList.remove("active");
document.getElementById("id_service").classList.remove("active");
document.getElementById("id_activity").classList.remove("active");
document.getElementById("id_contact").classList.remove("active");
  }
  AddActive(id:string){
    document.getElementById(id).classList.add("active");
      }
}
