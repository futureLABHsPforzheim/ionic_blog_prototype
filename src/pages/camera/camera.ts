import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  pic_path: any;

  //Cam Options
  options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

  constructor(public navCtrl: NavController, private base64ToGallery: Base64ToGallery,private camera: Camera, public alertCtrl: AlertController) {

  }

  //Take Picture
  addPic() {
      let al = this.alertCtrl.create({
        title: 'Foto auswählen',
        message: 'Kamera oder Galerie öffnen?',
        buttons: [
          {
            text: 'Kamera',
            role: 'cancel',
            handler: () => {
              this.camera.getPicture(this.options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                this.pic_path = 'data:image/jpeg;base64,' + imageData;
                this.saveImgToGallery(imageData);
              }, (err) => {
                console.log("Error" + err);
              });
              let alert = this.alertCtrl.create({
                title: 'Hui, ein Erfolg!',
                subTitle: 'Bild erfolgreich gespeichert!',
                buttons: ['OK']
              });
              alert.present();
            }
          },
          {
            text: 'Galerie',
            handler: () => {
              this.camera.getPicture({
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: this.camera.DestinationType.DATA_URL
              }).then((imageData) => {
                this.pic_path = 'data:image/jpeg;base64,' + imageData;
                this.saveImgToGallery(imageData);
              }, (err) => {
                console.log("Error" + err);
              });
            }
          }
        ]
      });
      al.present();
  }

  //Save to gallery
  saveImgToGallery(base64Data) {
    this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }
}
