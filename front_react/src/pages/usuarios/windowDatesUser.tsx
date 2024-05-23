import React from 'react';
import {
    IonCard,
    IonTitle,
    IonItem,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonAvatar,
} from '@ionic/react';
import RadarChart from './grafica';  // Importa tu componente de la gráfica
import './windowDates.css';

function WindowDates({ datesUser }: { datesUser: any }) {
    return (
        <>
            <IonCard>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Detalles del Usuario</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {datesUser && (
                    <>
                        <IonItem id='dates' lines='none'>
                            <IonLabel>
                                <IonAvatar>
                                        <img src={datesUser.avatar} alt="Avatar img" />
                                </IonAvatar>
                                <div id="user-details">
                                    <h2>Name: {datesUser.name}</h2>
                                    <h2>Level: {datesUser.level}</h2>
                                    <p>Height: {datesUser.heigh} cm</p>
                                    <p>Weight: {datesUser.weight} kg</p>
                                    <p>Age: {datesUser.edge} years</p>
                                </div>
                            </IonLabel>
                            <div >
                                <RadarChart data={datesUser} />
                            </div>
                        </IonItem>
                    </>
                )}
            </IonCard>
        </>
    );
}

export default WindowDates;
