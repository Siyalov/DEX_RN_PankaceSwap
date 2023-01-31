import React from 'react';
import * as api from '../api';

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
