import { Component, OnDestroy, OnInit } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit, OnDestroy {
  html5QrcodeScanner: any
  str: string = ''
  constructor() {

  }
  ngOnDestroy(): void {
    this.html5QrcodeScanner.clear()
  }
  ngOnInit(): void {
    const config = {
      fps: 10,
      qrbox: 250,
      disableFlip: true
    }
    this.html5QrcodeScanner = new Html5QrcodeScanner("html5qr-code-full-region", config, true);
    
    this.html5QrcodeScanner.render(this.qrCodeSuccessCallback, this.qrCodeErrorCallback);
  }

  qrCodeSuccessCallback() {
  }

  qrCodeErrorCallback() {

  }
  close() {
    this.html5QrcodeScanner.clear()
  }

}
