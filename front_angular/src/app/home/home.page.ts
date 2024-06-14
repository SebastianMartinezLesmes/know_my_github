import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  graphic: string = 'front';

  graphicfront(){
    this.graphic = 'front';
  }
  graphicBack(){
    this.graphic = 'back';
  }
  graphicdataBase(){
    this.graphic = 'database';
  }

}
