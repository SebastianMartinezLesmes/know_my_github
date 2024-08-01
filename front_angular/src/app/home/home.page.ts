import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  experience_call= 'jobs'
  graphic: string = 'front';

  experience_jobs(){
    this.experience_call = 'jobs'
  }
  experience_reference(){
    this.experience_call = 'reference'
  }
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
