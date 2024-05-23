import React, { useState, useEffect } from 'react';
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonSearchbar,
  IonHeader,
  IonLabel,
  IonButton,
} from '@ionic/react';
import './InfiniteScroll.css';
import WindowDates from './windowDatesUser';

function InfiniteScroll() {
  const [items, setItems] = useState<string[]>([]);
  const [info, setInfo] = useState<any>(null);
  const [searchText, setSearchText] = useState('');
  const [menuOption, setMenuOption] = useState(false);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  });

  const handleSearch = (event: CustomEvent) => {
    setSearchText(event.detail.value);
  };

  const filteredItems = items.filter((item, index) => {
    return (
      item.toLowerCase().includes(searchText.toLowerCase()) ||
      (index + 1).toString().includes(searchText)
    );
  });

  const handleAvatarClick = (item: string, index: number) => {
    const getRandomValue = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let avatarUrl = `https://picsum.photos/80/80?random=${index}`;

    let datesUser = {
      name: item,
      health: getRandomValue(80, 100),
      strong: getRandomValue(60, 100),
      speed: getRandomValue(20, 100),
      resistence: getRandomValue(30, 100),
      edge: getRandomValue(20, 80),
      weight: getRandomValue(60, 180),
      heigh: getRandomValue(150, 280),
      level: getRandomValue(0, 100),
      avatar: avatarUrl 
    };

    setMenuOption(true);
    setInfo(datesUser);
  };

  return (
    <>
      {menuOption ? 
        <>
          <IonButton expand="full" onClick={() => setMenuOption(false)}>Cerrar</IonButton>
          <WindowDates datesUser={info} /> 
        </>
      : null}

      <IonHeader>
          <IonSearchbar showClearButton="focus" value={searchText} onIonInput={handleSearch} debounce={500} />
      </IonHeader>

      <IonGrid>
        <IonRow>
          {filteredItems.map((item, index) => (
            <IonCol size="3" key={index}>
              <IonLabel>{index + 1}</IonLabel>
              <IonAvatar>
                <img src={`https://picsum.photos/80/80?random=${index}`} alt="avatar img" onClick={() => handleAvatarClick(item, index)}/>
              </IonAvatar>
              <IonLabel id='nameElement'>
                {item}
              </IonLabel>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </>
  );
}

export default InfiniteScroll;
