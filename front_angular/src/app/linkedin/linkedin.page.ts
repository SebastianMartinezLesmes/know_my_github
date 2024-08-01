import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.page.html',
  styleUrls: ['./linkedin.page.scss'],
})
export class LinkedinPage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  goGitHub(){
    this.router.navigate(['./git-hub'])
  }

  goHome(){
    this.router.navigate(['./home'])
  }

}
