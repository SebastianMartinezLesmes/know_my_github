import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  userName: string = 'SebastianMartinezLesmes'; // Nombre del usuario de GitHub
  readT: string = ''; // Token para realizar las consultas
  user: any = [];
  repos: any = [];

  goLinkedin(){
    this.router.navigate(['./linkedin']);
  }
  
  goHome(){
    this.router.navigate(['./home']);
  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `token ${this.readT}`
    });
  }

  getBasicData(){
    this.http.get('https://api.github.com/users/' + this.userName, { headers: this.getHeaders() })
    .subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        if (error.status === 403) {
          alert('Excedido el límite de consulta');
        } else if (error.status === 401) {
          alert('Autorización inválida');
        } else {
          console.error('Error:', error);
        }
      }
    );
  }

  getRepositories(){
    this.http.get('https://api.github.com/users/' + this.userName + '/repos', { headers: this.getHeaders() })
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
          pulls: [],
          issues: []
        }));
        this.getReposLanguages();
        this.getReposBranches();
        this.getReposPulls();
        this.getReposIssues();
      },
      error => {
        if (error.status === 403) {
          alert('Excedido el límite de consulta');
        } else if (error.status === 401) {
          alert('Autorización inválida');
        } else {
          console.error('Error:', error);
        }
      }
    );
  }

  getReposLanguages(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/languages', { headers: this.getHeaders() })
      .subscribe(
        (data: any) => {
          repo.languages = Object.keys(data);
          console.log(`Languages for ${repo.name}:`, repo.languages);
        },
        error => {
          if (error.status === 403) {
            alert('Excedido el límite de consulta');
          } else if (error.status === 401) {
            alert('Autorización inválida');
          } else {
            console.error('Error:', error);
          }
        }
      );
    });
  }

  getReposBranches(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/branches', { headers: this.getHeaders() })
      .subscribe(
        (data: any) => {
          repo.branches = data.map((branch: any) => branch.name);
          console.log(`Branches for ${repo.name}:`, repo.branches);
        },
        error => {
          if (error.status === 403) {
            alert('Excedido el límite de consulta');
          } else if (error.status === 401) {
            alert('Autorización inválida');
          } else {
            console.error('Error:', error);
          }
        }
      );
    });
  }

  getReposPulls(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/pulls?state=all', { headers: this.getHeaders() })
      .subscribe(
        (data: any) => {
          repo.pulls = data.map((pull: any) => ({
            title: pull.title,
            created_at: pull.created_at,
          }));
          console.log(`Pulls for ${repo.name}:`, repo.pulls);
        },
        error => {
          if (error.status === 403) {
            alert('Excedido el límite de consulta');
          } else if (error.status === 401) {
            alert('Autorización inválida');
          } else {
            console.error('Error:', error);
          }
        }
      );
    });
  }
  
  getReposIssues(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/issues?state=all', { headers: this.getHeaders() })
      .subscribe(
        (data: any) => {
          repo.issues = data.map((issue: any) => ({
            title: issue.title,
            state: issue.state,
            closed_at: issue.closed_at,
            created_at: issue.created_at,
          }));
          console.log(`Issues for ${repo.name}:`, repo.issues);
        },
        error => {
          if (error.status === 403) {
            alert('Excedido el límite de consulta');
          } else if (error.status === 401) {
            alert('Autorización inválida');
          } else {
            console.error('Error:', error);
          }
        }
      );
    });
  }

  getReposCollaborators(){
    this.repos.forEach((repo: any) => {
      this.http.get('https://api.github.com/repos/' + this.userName + '/' + repo.name + '/collaborators', { headers: this.getHeaders() })
      .subscribe(
        (data: any) => {
          repo.languages = Object.keys(data);
          console.log(`Collaborators for ${repo.name}:`, repo.languages);
        },
        error => {
          if (error.status === 403) {
            alert('Excedido el límite de consulta');
          } else if (error.status === 401) {
            alert('Autorización inválida');
          } else {
            console.error('Error:', error);
          }
        }
      );
    });
  }
}