import React, {useEffect, useState} from 'react';
import Home from './pages/Home';
import * as api from './api';
import Exchange from './pages/Exchange';
// import ModalWrapper from './components/ModalWrapper/ModalWrapper';

export interface AppContext {
  currentTokenA?: api.TokenObject;
  setCurrentTokenA: React.Dispatch<
    React.SetStateAction<api.TokenObject | undefined>
  >;
  tokens?: api.TokensListResponse;
  setTokens: React.Dispatch<
    React.SetStateAction<api.TokensListResponse | undefined>
  >;
  currentTokenB?: api.TokenObject;
  setCurrentTokenB: React.Dispatch<
    React.SetStateAction<api.TokenObject | undefined>
  >;
}

export const Context = React.createContext<AppContext>({} as AppContext);

export default function App() {
  const [tokens, setTokens] = useState<api.TokensListResponse>();
  const [currentTokenA, setCurrentTokenA] = useState<api.TokenObject>();
  const [currentTokenB, setCurrentTokenB] = useState<api.TokenObject>();

  useEffect(() => {
    api.getTokensList().then(setTokens);
    // setTokens(await api.getTokensList())
  }, []);

  return (
    <Context.Provider
      value={{
        currentTokenA,
        setCurrentTokenA,
        currentTokenB,
        setCurrentTokenB,
        tokens,
        setTokens,
      }}>
      <Exchange />
      <Home />
    </Context.Provider>
  );
}
