import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Context} from '../App';
import * as api from '../api';

export default function Exchange() {
  const {currentTokenA, currentTokenB} = useContext(Context);
  const [exchangePrice, setExchangePrice] = useState<api.ExchangePrice>();

  useEffect(() => {
    if (currentTokenA && currentTokenB) {
      setExchangePrice(undefined);
      api.getCurrentPrice(currentTokenA, currentTokenB).then(setExchangePrice);
    }
  }, [currentTokenA, currentTokenB]);

  return (
    <>
      <Text>{exchangePrice?.a_to_b.toFixed(currentTokenA?.decimals)}</Text>
    </>
  );
}
