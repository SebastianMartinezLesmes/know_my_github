import React, { useState } from 'react';
import { 
  IonButton, 
  IonContent, 
} from '@ionic/react';
import './cards.css'
import Events from './events'
import Trophies from './trofeos'

function Card() {
  const [clickEvent, setClickEvent] = useState('trophies');
  return (
    <>
      <IonContent>
        <div id='header'>
          <IonButton onClick={() => setClickEvent('events')}>Events</IonButton>
          <IonButton onClick={() => setClickEvent('trophies')}>Trophies</IonButton>
        </div>
        {clickEvent === 'trophies'? <Trophies/> : <Events/>}
      </IonContent>
    </>
  );
}
export default Card;