import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.page.html',
  styleUrls: ['./edit-form.page.scss'],
})
export class EditFormPage implements OnInit {
  info: any = []; // Define una propiedad para almacenar los datos del usuario
  nombre: string = 'esta'
  apellido: string =  ''
  contrasena: string = ''
  rol = ''

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private http:HttpClient, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Accede a los datos pasados a través del estado de la navegación
    this.info = this.route.snapshot.paramMap.get('data')
    if (this.info) {
      this.nombre = this.info.nombreUsuario;
      this.apellido = this.info.apellidoUsuario;
      this.contrasena = this.info.contrasenaUsuario;
      this.rol = this.info.rol;
    }
  }

  back(){
    this.router.navigate(['/home']);
  }

  imprimir() {
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Contraseña:', this.contrasena);
  }
}
