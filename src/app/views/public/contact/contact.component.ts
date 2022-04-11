import { UtilitiesService } from './../../../services/utilities/utilities.service';
import { Component, OnInit } from '@angular/core';
import * as MapBoxGl from 'mapbox-gl';
import { deployConf } from '../../../utils/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mapMapBox: MapBoxGl.Map | null = null;

  constructor(private utilitiesService : UtilitiesService) { }

  ngOnInit(): void {
    this.initMapBox();
  }

  initMapBox() {
    try {
      let lng = -106.1111267;
      let lat = 28.680642;

      //Set apikey
      (MapBoxGl as any).accessToken = deployConf.mapBoxApiKey;

      this.mapMapBox = new MapBoxGl.Map({
        container: 'mapa-mapbox-contact', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ -106.1111267, 28.680642], // LNG , LAT
        zoom: 16/* 17 */ // starting zoom
      });

      this.addMarker(lng, lat);

      // Add zoom and rotation controls to the map.
      this.mapMapBox.addControl(new MapBoxGl.NavigationControl());
    } catch (error) {
      this.utilitiesService.showErrorToast("No se pudo inicializar el mapa","Error");
      console.log(error);
    }
  }

  addMarker(lngDto: number, latDto: number) {
    const el = document.createElement('div');
    el.className = 'marker-imtech';

    /* let options : mapboxgl.MarkerOptions = {
      element : el,
      scale : 1,
      draggable : false,
    } */

    const marker = new MapBoxGl.Marker(el)
      .setLngLat([lngDto + 0.0002, latDto + 0.0001])
      .setPopup(
        new MapBoxGl.Popup({ offset: 25, closeOnClick: false, focusAfterOpen: false, closeOnMove: false }) // add popups
          .setHTML(
            '<div class="row pa-10">' +
              '<div class="col-12 full-centered">' +
               '<img class="pa-30 normal-shadow logo-image-tm" src="/assets/images/pages/contact/logo_trans.png">' +
              '</div>' +
            '</div>'
          )
      )
      .addTo((this.mapMapBox as MapBoxGl.Map)).togglePopup();
  }
}
