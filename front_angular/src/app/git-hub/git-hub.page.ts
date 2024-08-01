import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.page.html',
  styleUrls: ['./git-hub.page.scss'],
})
export class GitHubPage implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit() {
  }

  goLinkedin(){
    this.router.navigate(['./linkedin'])
  }
  
  goHome(){
    this.router.navigate(['./home'])
  }

}
