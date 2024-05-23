import React, { useState } from 'react';
import {
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,

} from '@ionic/react';
import './events.css'
const Events = () => {
  // Supongamos que tienes una lista de eventos de videojuegos
  const events = [
    {
        id: 1,
        url_img: 'https://th.bing.com/th/id/R.c31521b6b3656c99d25ea6f4999763aa?rik=3JAv9nrRYe4jYg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fcall_of_duty_online_game-1680x1050.jpg&ehk=QJme2zjVuLEcj879CUrUKh7%2fejhebdWjSteVYO2%2bawg%3d&risl=&pid=ImgRaw&r=0',
        title: 'Torneo de Call of Duty',
        subtitle: 'Competición online',
        description: '¡Participa en nuestro torneo de Call of Duty y demuestra tus habilidades en la batalla!',
        date: '17 de marzo del 2023',
    },
    {
        id: 2,
        url_img: 'https://th.bing.com/th/id/R.e0ddfb0f6b14b49876ecce6c6066ed72?rik=k0cmhM5d1XoryA&pid=ImgRaw&r=0',
        title: 'Presentación de Cyberpunk 2077',
        subtitle: 'Evento presencial',
        description: 'Ven y sé uno de los primeros en probar Cyberpunk 2077 antes de su lanzamiento oficial.',
        date: '10 de diciembre del 2020',
    },
    {
        id: 3,
        url_img: 'https://tse2.mm.bing.net/th/id/OIP.7lInLWOr7p2kn5UYsOx1fQHaHa?rs=1&pid=ImgDetMain',
        title: 'Lanzamiento de Halo Infinite',
        subtitle: 'Evento de lanzamiento',
        description: 'Celebra con nosotros el lanzamiento de Halo Infinite con actividades, premios y más.',
        date: '8 de diciembre del 2021',
    },
  ];

  return (
    <>
      {events.map((event) => (
        <IonCard key={event.id} id='event'>
            <img src={event.url_img} alt="img evento" />

            <div>
                <div>
                    <div>
                        <IonCardTitle>{event.title}</IonCardTitle>
                        <IonCardSubtitle>{event.subtitle}</IonCardSubtitle>
                    </div>
                    <IonLabel>{event.date}</IonLabel>
                </div>
                <span>{event.description}</span>
            </div>

        </IonCard>
      ))}
    </>
  );
};

export default Events;
