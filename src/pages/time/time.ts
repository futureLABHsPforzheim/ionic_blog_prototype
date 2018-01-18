import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-time',
  templateUrl: 'time.html'
})
export class TimePage {

  //Variables
  hours:any;
  minutes:any;
  seconds:any;

  constructor(public navCtrl: NavController) {
    //Use new Date to get the current System Time and safe it into the variables
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    console.log("Constructor");
    this.getTheTime();
  }

  //The method wich updates the variables every second
  getTheTime(){
    console.log("Get The Time");
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
      setTimeout(() => {
        this.getTheTime();
      }, 1000);
  }
}
