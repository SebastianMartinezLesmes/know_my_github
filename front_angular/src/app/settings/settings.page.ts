import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  iconName = 'sunny'; // Nombre del ícono por defecto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const isDarkMode = localStorage.getItem('dark-theme') === 'true';
    this.iconName = isDarkMode ? 'moon' : 'sunny';
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    }
  }

  goGitHub() { this.router.navigate(['./git-hub']); }
  goHome() { this.router.navigate(['./home']); }

  toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme', isDarkMode ? 'true' : 'false');
    this.iconName = isDarkMode ? 'moon' : 'sunny';
  }  
}
