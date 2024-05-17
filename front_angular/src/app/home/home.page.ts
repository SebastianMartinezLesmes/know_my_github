import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el router de Angular


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.getUsers(); 
  }

  SeePassword(usuario: any) {
    usuario.mostrarContrasena = !usuario.mostrarContrasena;
  }  

  getUsers() {
    this.http.get('http://127.0.0.1:5000/getUsers').subscribe(
      (response: any) => {
        this.usuarios = response;
        this.usuarios.forEach(usuario => usuario.mostrarContrasena = false);
      }, 
      (error) => { 
        console.error('Error al obtener los DATOS del servidor:', error); 
      }
    )
  };

  editUser(usuario: any) {
    // Navega a la página "edit-form" y pasa la información del usuario como parámetro
    this.router.navigate(['/edit-form', { data: usuario }]);
    console.log(usuario);
  };
  
  createUser() {
    this.router.navigate(['/edit-form']);
  };
}
