import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aletr',
  templateUrl: './aletr.page.html',
  styleUrls: ['./aletr.page.scss'],
})
export class AletrPage implements OnInit {
  constructor(public alertCtlr: AlertController) {}

  ngOnInit() {}

  async presentInput(){
    const input = await this.alertCtlr.create({
      header: 'Input',
      subHeader: 'ingresa su nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre',
        },
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            console.log('confirm cancel');
          },
        },
        {
          text: 'ok',
          handler: () => {
            console.log('confirm ok ');
          },
        },
      ],
    });

await input.present();

  }






  async presentAlert() {
    const alert = await this.alertCtlr.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancelar');
          },
        },
        {
          text: 'ok',
          handler: (blah) => {
            console.log('boton ok');
          }
        },
      ],
    });

    await alert.present();
  }
}
