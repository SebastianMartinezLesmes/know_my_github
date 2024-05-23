import React, { useState } from 'react';
import { IonApp } from '@ionic/react';
import Login from './login';
import Menu from './menu';
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setIsAuthenticated(true);
  };

  return (
    <IonApp>
      {isAuthenticated ? (
        <Menu />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </IonApp>
  );
};

export default App;
