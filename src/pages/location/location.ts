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
    //Start the method to fetch the location
    this.getThePosition();
  }

  //Get the Location & Speed
  getThePosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Start get Position");
      //Round it to 2 positions after the comma
      this.longitude = Math.round(resp.coords.longitude*100)/100;
      this.latitude = Math.round(resp.coords.latitude*100)/100;
      this.altitude = Math.round(resp.coords.altitude*100)/100;
      this.speed = resp.coords.speed;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
