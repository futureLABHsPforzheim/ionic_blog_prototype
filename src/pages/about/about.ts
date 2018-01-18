import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  longitude: number;
  latitude: number;
  altitude: number;
  speed: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.getThePosition();
  }

  //Get the Location & Speed
  getThePosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Start get Position");
      this.longitude = resp.coords.longitude;
      this.latitude = resp.coords.latitude;
      this.altitude = resp.coords.altitude;
      this.speed = resp.coords.speed;
      console.log("Lon: " + this.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
