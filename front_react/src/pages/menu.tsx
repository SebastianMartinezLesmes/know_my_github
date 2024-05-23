import React,{useState, useEffect} from 'react';
import Card from './cards/card';
import InfiniteScroll from './usuarios/infiniteScroll';
import './menu.css';
import { IonButtons, IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function Menu() {
    const [selection, setSelection] = useState('');
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pages to go</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonButtons id='buttons'>
                <IonButton onClick={() => setSelection('card')}>Card</IonButton>
                <IonButton onClick={() => setSelection('infiniteScroll')}>Infinite Users</IonButton>
          </IonButtons>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        {selection === 'card' ? <Card /> : <InfiniteScroll />}
        </IonContent>
      </IonPage>
    </>
  );
}
export default Menu;