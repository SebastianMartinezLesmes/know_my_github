import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.page.html',
  styleUrls: ['./edit-form.page.scss'],
})
export class EditFormPage implements OnInit {
  info: any = [];
  job: any = '';
  nombre: string = '';
  apellido: string = '';
  contrasena: string = '';
  rol = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient, 
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.job = this.route.snapshot.paramMap.get('job')
    console.log(this.job)
    if (this.job === null || this.job === ''){
      this.router.navigate(['/home']);
    }
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

  // Controlador de los mensajes de alerta
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
      mode: 'ios'
    });

    await alert.present();
  }

  // Controlador de las ventanas de carga
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'circular', // tipo de animación
      mode: 'ios'
    });
    await loading.present();
    return loading;
  }

  async selectJob() {
    const loading = await this.presentLoading();
    try {
      if (this.job === 'edit') {
        await this.editarUsuario();
      } else {
        await this.crearUsuario();
      }
    } finally {
      loading.dismiss();
    }
  }
}
