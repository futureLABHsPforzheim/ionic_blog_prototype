import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  longitude: number;
  latitude: number;
  altitude: number;
  speed: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    console.log("Location Constructor");
    this.getThePosition();
  }

  //Get the Location & Speed
  getThePosition() {
  console.log("Fetch");
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Start get Position");
      this.longitude = Math.round(resp.coords.longitude);
      this.latitude = Math.round(resp.coords.latitude);
      this.altitude = Math.round(resp.coords.altitude);
      this.speed = resp.coords.speed;
      console.log("Lon: " + this.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
