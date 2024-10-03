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

  certificates = [
    {
      direction: '../../assets/certificates/AWS Certificate.png',
      title: 'AWS Certificate',
      institution: 'Amazon Web Services'
    },
    {
      direction: '../../assets/certificates/DESARROLLO WEB Certificate.png',
      title: 'Desarrollo Web Certificate',
      institution: 'Edutin Academy'
    },
    {
      direction: '../../assets/certificates/ANGULAR Certificate.png',
      title: 'Angular Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/REACT Certificate.png',
      title: 'React Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/HTML Certificate.png',
      title: 'HTML Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/IONIC MOVIL APP Certificate.png',
      title: 'Ionic Mobile App Development Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/LESS Certificate.png',
      title: 'LESS Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/SCSS Certificate.png',
      title: 'SCSS Certificate',
      institution: 'Mind Luster'
    },
    {
      direction: '../../assets/certificates/JAVASCRIPT Certificate.png',
      title: 'JavaScript Certificate',
      institution: 'Mind Luster'
    },
  ];  

  constructor(
    private router:Router
  ) {}

  experience_call= 'jobs';
  graphic: string = 'front';
  learn: string = 'studies';

  changeLearn(type: string) {
    this.learn = type;
  }

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