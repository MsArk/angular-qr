import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // let qrcode = new QRCode("qrcode", {
  //   text: "http://ejemplo.com",
  //   width: 256,
  //   height: 256,
  //   colorDark : "#000000",
  //   colorLight : "#ffffff",
  //   correctLevel : QRCode.CorrectLevel.H,
  //   qrCodeURL: '/assets/mi-logo.png'
  // });

  qrdata: string = '';
  // Permite qrdata ser un string vacio
  allowEmptyString: boolean = true;
  // Texto alternativo
  alt: string = '';
  // Texto aria
  ariaLabel: string = '';
  // Color
  colorDark: string = '';
  // Background
  colorLight: string = '';
  // Tipo imagen
  // 'canvas', 'svg', 'img', 'url'
  elementType: string = 'canvas';
  // nivel de corrección de errores del código QR 
  errorCorrectionLevel: string = 'L';
  // Imagen de fondo
  imageSrc: string = '';
}
