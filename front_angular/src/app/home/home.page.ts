import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jobs = [
    {
      company: 'Sena',
      period: 'jun/2022 - dic/2023',
      position: 'Aprendiz'
    },
    {
      company: 'Grupo-ASD',
      period: 'dic/2023 - jun/2024',
      position: 'Analista y desarrollador de software'
    },
  ];  

  references = [
    {
      name: 'Gonzalo Augusto Salgado Cadavid',
      title: 'Desarrollador Front-End',
      phone: '3188386080',
      email: 'gsalgado@grupoasd.com.co'
    },
    {
      name: 'Jair Rojas Pineda',
      title: 'DevOps Engineer AWS',
      phone: '3197604000',
      email: 'jrojpin@gmail.com'
    },
  ]

  constructor(
    private router:Router
  ) {}

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

  goGitHub(){
    this.router.navigate(['./git-hub'])
  }

  goLinkedin(){
    this.router.navigate(['./linkedin'])
  }

}