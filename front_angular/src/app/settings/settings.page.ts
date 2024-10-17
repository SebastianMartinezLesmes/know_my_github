import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goGitHub(){
    this.router.navigate(['./git-hub'])
  }

  goHome() {
    this.router.navigate(['./home']);
  }

}
