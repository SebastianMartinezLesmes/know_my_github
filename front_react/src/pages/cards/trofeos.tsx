import React from 'react';
import { IonCard, IonAvatar, IonCardTitle, IonLabel } from '@ionic/react';
import './trofeos.css';
import '../../../public/trophy.png'

// Definimos la interfaz para el tipo de evento
interface Event {
  id: number;
  url_img: string;
  title: string;
  winner: string;
  category: string;
  date: string;
}

const Trophies: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      url_img: 'https://th.bing.com/th/id/R.c31521b6b3656c99d25ea6f4999763aa?rik=3JAv9nrRYe4jYg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fcall_of_duty_online_game-1680x1050.jpg&ehk=QJme2zjVuLEcj879CUrUKh7%2fejhebdWjSteVYO2%2bawg%3d&risl=&pid=ImgRaw&r=0',
      title: 'Call of Duty',
      winner: 'Amir, Castillo y zDark',
      category: 'Competition',
      date: '6 octubre 2023',
    },
    {
        id: 2,
        url_img: 'https://th.bing.com/th/id/R.e0ddfb0f6b14b49876ecce6c6066ed72?rik=k0cmhM5d1XoryA&pid=ImgRaw&r=0',
        title: 'Cyberpunk 2077',
        winner: 'ColdCypher',
        category: 'Speedrun',
        date: '15 abril 2021',
    },
    {
        id: 3,
        url_img: 'https://tse2.mm.bing.net/th/id/OIP.7lInLWOr7p2kn5UYsOx1fQHaHa?rs=1&pid=ImgDetMain',
        title: 'Halo Infinite',
        winner: 'Cloud9',
        category: 'Competition',
        date: '4 septiembre 2023',
    },
    {
        id: 4,
        url_img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267',
        title: 'Sekiro: Shadows Die Twice',
        winner: 'pasiflora',
        category: 'Speedrun',
        date: '23 abril 2024',
    },
    {
        id: 5,
        url_img: 'https://www.internetmatters.org/wp-content/uploads/2018/01/Minecraft-image.jpg',
        title: 'Minecraft version de Java',
        winner: 'drip120',
        category: 'Speedrun',
        date: '3 enero 2024',
    },
  ];

  // Definimos el tipo para groupedEvents
  const groupedEvents: { [key: string]: Event[] } = events.reduce((groups, event) => {
    const { category } = event;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(event);
    return groups;
  }, {} as { [key: string]: Event[] });

  return (
    <div className='gallery'>
      {Object.keys(groupedEvents).map((category) => (
        <div key={category} className='category-group'>
          <h2 className='category-title'>{category}</h2>
          <div className='category-events'>
            {groupedEvents[category].map((event) => (
              <IonCard key={event.id} className='trophy-card'>
                <IonAvatar className='trophy-avatar'>
                  <img src={event.url_img} alt={event.title} id='img1'/>
                  <img src="/trophy.png" alt="Trophy" id='img2'/>
                </IonAvatar>
                <IonCardTitle className='trophy-title'>{event.title}</IonCardTitle>
                <div id='content_card'>
                  <IonLabel className='winner-label'>Titulo: {event.title}</IonLabel>
                  <IonLabel className='winner-label'>Fecha: {event.date}</IonLabel>
                  <IonLabel className='winner-label'>Ganador(es): {event.winner}</IonLabel>
                </div>
              </IonCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trophies;
