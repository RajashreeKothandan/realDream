import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  content?:string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  limit: number = 1;
   apiData: PhotosApi=[{ albumId: 1,
    id: 1,
    title: "team-1",
    url: "../../assets/img/team-1.jpg",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }, 
    { albumId: 1,
      id: 2,
      title: "team-2",
      url: "../../assets/img/team-2.jpg",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
      { albumId: 1,
        id: 3,
        title: "team-3",
        url: "../../assets/img/team-3.jpg",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    ] as any;
   
  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['asaa', 'as'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },

      940: {
        items: 3
      }
    },
    nav: true
  }
}
