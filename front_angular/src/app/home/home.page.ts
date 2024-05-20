import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios: any[] = [];
  filteredUsuarios: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://127.0.0.1:5000/getUsers').subscribe(
      (response: any) => {
        this.usuarios = response;
        this.filteredUsuarios = [...this.usuarios]; // Inicializa filteredUsuarios con todos los usuarios
        this.usuarios.forEach(usuario => usuario.mostrarContrasena = false);
      },
      (error) => {
        console.error('Error al obtener los DATOS del servidor:', error);
      }
    );
  }

  filterUsers(event: any) {
    const searchTerm = event.target.value.trim().toLowerCase();

    if (!searchTerm) {
      this.filteredUsuarios = [...this.usuarios];
      return;
    }

    this.filteredUsuarios = this.usuarios.filter(usuario => {
      return (
        usuario.nombreUsuario.toLowerCase().includes(searchTerm) ||
        usuario.apellidoUsuario.toLowerCase().includes(searchTerm)
      );
    });
  }

  SeePassword(usuario: any) {
    usuario.mostrarContrasena = !usuario.mostrarContrasena;
  }

  editUser(usuario: any) {
    this.router.navigate(['/edit-form', { data: usuario, job: 'edit' }]);
    console.log(usuario);
  }

  createUser() {
    this.router.navigate(['/edit-form', {job: 'create'}]);
  }

}
