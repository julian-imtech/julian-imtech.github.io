import { UtilitiesService } from './../../../services/utilities/utilities.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { SEOService } from './../../../services/seo/seo.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  actualDescription: number = -1;
  initialWidthDescription: number = -1;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    center : true,
    freeDrag : true,
    dots: false,
    startPosition : 1,
    margin: 35,
    /* responsiveRefreshRate : 15, */
    navSpeed: 700,
    navText: ['', ''],
    items : 4.5,
    responsive: {
      940: {
        items: 4.5
      }
      /* 0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      } */
    },
    nav: false
  }

  constructor(private SEOService : SEOService,public utilitiesService : UtilitiesService) {
    this.SEOService.updateMeta(()=>{});
  }

  @HostListener('window:resize', ['$event'])
  async ngOnInit() {
    this.initialWidthDescription = -1;
    let p: HTMLElement | null = document.getElementById("description-div");

    if(p) {
      console.log("P:", p.offsetWidth);
      await this.utilitiesService.sleep(100);
      this.initialWidthDescription = p.offsetWidth;
    }
  }

  changeUsData( index : number ){
    if (index == this.actualDescription) {
      this.actualDescription = -1;
    } else {
      this.actualDescription = index;
    }
  }
}
