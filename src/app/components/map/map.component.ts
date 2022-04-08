import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  @Input('latitude') latitude!: number;
  @Input('longitude') longitude!: number;
  map: any;

  ngOnInit(): void {
    this.map = L.map('map').setView([this.latitude, this.longitude], 1);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: environment.mapbox.accessToken,
      }
    ).addTo(this.map);

    this.map.flyTo([this.latitude, this.longitude], 5);

    const icon = L.icon({
      iconUrl: 'assets/img/marker-icon.png',
      iconRetinaUrl: 'assets/img/marker-icon-2x.png',
      shadowUrl: 'assets/img/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });

    L.marker([this.latitude, this.longitude], { icon }).addTo(this.map);
  }
}
