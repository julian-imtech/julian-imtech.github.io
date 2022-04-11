import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


import '@google/model-viewer';

@Component({
  selector: 'app-models-viewer',
  templateUrl: './models-viewer.component.html',
  styleUrls: ['./models-viewer.component.scss']
})
export class ModelsViewerComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | null = null;

  filesDataConfig : {
    min : number,
    max : number,
    giro : number,
    actualZoom : number,
    originalZoom : number,
    camera_orbit : string,
    src : string,
  }[] = [{
    min : 0,
    max : 150,
    giro : 0,
    actualZoom : 0,
    originalZoom : 250,
    camera_orbit : '0deg 0deg '+250+'m',
    src : '/assets/images/pages/landing/ultrasonic_model.glb',
  },{
    min : 0,
    max : 100,
    actualZoom : 0,
    giro : 90,
    originalZoom : 150,
    camera_orbit : '90deg 0deg '+150+'m',
    src : '/assets/images/pages/landing/gas_model.glb',
  },];

  actualSlide : number;

  constructor() {
    this.actualSlide = 0;
  }

  ngOnInit(): void {

  }

  zoomGiroChange(){
    this.filesDataConfig[this.actualSlide].camera_orbit = this.filesDataConfig[this.actualSlide].giro+'deg 0deg '+
      (this.filesDataConfig[this.actualSlide].originalZoom - this.filesDataConfig[this.actualSlide].actualZoom)+'m';
  }

  onSlide(slideEvent: NgbSlideEvent) {
    this.actualSlide = parseInt(slideEvent.current);
  }
}
