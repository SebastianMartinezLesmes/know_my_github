import { HttpClient } from '@angular/common/http';
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
  job: any = '';
  nombre: string = 'Pato';
  apellido: string = '';
  contrasena: string = '';
  rol = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Accede a los datos pasados a través del estado de la navegación
    this.job = this.route.snapshot.paramMap.get('job')
    this.info = this.route.snapshot.paramMap.get('data');
    if (this.info) {
      this.nombre = this.info.nombreUsuario;
      this.apellido = this.info.apellidoUsuario;
      this.contrasena = this.info.contrasenaUsuario;
      this.rol = this.info.rol;
    }
  }

  back() {
    this.router.navigate(['/home']);
  }

  imprimir() {  
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Contraseña:', this.contrasena);
  }

  async editarUsuario() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      contrasena: this.contrasena,
      rol: this.rol
    };

    try {
      const response = await fetch(`http://127.0.0.1:5000/testUpdate/${this.info.idUsuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Usuario actualizado:', result);

      await this.presentAlert('Éxito', 'Usuario actualizado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);

      await this.presentAlert('Error', 'Hubo un problema al actualizar el usuario.');
    }
  }

  async crearUsuario() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      contrasena: this.contrasena,
      rol: this.rol
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/postUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Usuario creado:', result);

      await this.presentAlert('Éxito', 'Usuario creado exitosamente.');
    } catch (error) {
      console.error('Error al crear usuario:', error);

      await this.presentAlert('Error', 'Hubo un problema al crear el usuario.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
      mode: 'ios'
    });

    await alert.present();
  }

  selectJob() {
    if (this.job === 'edit') {
      this.editarUsuario();
    } else {
      this.crearUsuario();
    }
  }
}
