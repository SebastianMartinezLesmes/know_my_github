import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonAlert } from '@ionic/react';

const Login: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      onLogin(username, password);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
      </IonItem>
      <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Login Failed'}
        message={'Invalid username or password'}
        buttons={['OK']}
      />
    </IonContent>
  );
};

export default Login;
