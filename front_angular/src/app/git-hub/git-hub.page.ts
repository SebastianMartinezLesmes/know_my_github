import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.page.html',
  styleUrls: ['./git-hub.page.scss'],
})
export class GitHubPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
  ){}

  ngOnInit() {
    this.getBasicData();
    this.getRepositories();
  }

  userName: string = 'SebastianMartinezLesmes';
  user: any = [];
  repos: any = [];

  goLinkedin(){
    this.router.navigate(['./linkedin']);
  }
  
  goHome(){
    this.router.navigate(['./home']);
  }

  getBasicData(){
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  getRepositories(){
    this.http.get('https://api.github.com/users/' + this.userName + '/repos')
    .subscribe(
      (data: any) => {
        if (!data || data.length === 0) {
          alert('No se encontraron repositorios al consumir la API de GitHub');
          return;
        }
        this.repos = data.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          default_branch: repo.default_branch,
          open_issues: repo.open_issues,
          created_at: repo.created_at,
          pushed_at: repo.pushed_at,
          languages: [],
          branches: [], 
        }));
        this.getReposLanguages();
        this.getReposBranches();
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  getReposLanguages(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/languages')
      .subscribe(
        (data: any) => {
          repo.languages = Object.keys(data);
          console.log(`Languages for ${repo.name}:`, repo.languages);
        },
        error => {
          console.error('Error:', error);
        }
      );
    });
  }

  getReposBranches(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/branches')
      .subscribe(
        (data: any) => {
          repo.branches = data.map((branch: any) => branch.name);
          console.log(`Branches for ${repo.name}:`, repo.branches);
        },
        error => {
          console.error('Error:', error);
        }
      );
    });
  }
}
