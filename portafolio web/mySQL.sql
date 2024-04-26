CREATE DATABASE IF NOT EXISTS test;
USE test;

CREATE TABLE roles (
    idRol INT AUTO_INCREMENT PRIMARY KEY,
    nombreRol VARCHAR(200) NOT NULL
);

CREATE TABLE usuarios (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(50) NOT NULL,
    apellidoUsuario VARCHAR(50) NOT NULL,
    contraseñaUsuario VARCHAR(100) NOT NULL,
    idRol INT,
    FOREIGN KEY (idRol) REFERENCES roles(idRol)
);

-- Inserciones de los datos
-- roles
INSERT INTO roles (nombreRol) VALUES ('usuario');
INSERT INTO roles (nombreRol) VALUES ('admin');
INSERT INTO roles (nombreRol) VALUES ('super_admin');

-- usuarios
INSERT INTO usuarios (nombreUsuario, apellidoUsuario, contraseñaUsuario, idRol) 
VALUES 
    ('Super', 'Admin', 'password', 1), -- super_admin
    ('Admin1', 'Apellido', 'password', 2), ('Admin2', 'Apellido', 'password', 2), -- admins
    ('Usuario1', 'Apellido', 'password', 3), ('Usuario2', 'Apellido', 'password', 3), -- usuarios
    ('Usuario3', 'Apellido', 'password', 3), ('Usuario4', 'Apellido', 'password', 3), -- usuarios
    ('Usuario5', 'Apellido', 'password', 3), ('Usuario6', 'Apellido', 'password', 3), -- usuarios
    ('Usuario7', 'Apellido', 'password', 3), ('Usuario8', 'Apellido', 'password', 3); -- usuarios
