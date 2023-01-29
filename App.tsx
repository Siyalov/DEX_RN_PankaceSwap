import React, {useState} from 'react';
import Home from './pages/Home';
import * as api from './api';
import Exchange from './pages/Exchange';
// import ModalWrapper from './components/ModalWrapper/ModalWrapper';

export interface AppContext {
  currentTokenA?: api.TokenObject;
  setCurrentTokenA: React.Dispatch<
    React.SetStateAction<api.TokenObject | undefined>
  >;

  currentTokenB?: api.TokenObject;
  setCurrentTokenB: React.Dispatch<
    React.SetStateAction<api.TokenObject | undefined>
  >;
}

export const Context = React.createContext<AppContext>({} as AppContext);

export default function App() {
  const [currentTokenA, setCurrentTokenA] = useState<api.TokenObject>();
  const [currentTokenB, setCurrentTokenB] = useState<api.TokenObject>();

  return (
    <Context.Provider
      value={{
        currentTokenA,
        setCurrentTokenA,
        currentTokenB,
        setCurrentTokenB,
      }}>
      <Home />
    </Context.Provider>
  );
}
