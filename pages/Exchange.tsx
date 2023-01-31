import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Context} from '../contexts/appContext';
import * as api from '../api';
import {TextInput} from 'react-native';
import {Props} from '../navigation/types';

export default function Exchange({}: Props<'Exchange'>) {
  const {currentTokenA, currentTokenB} = useContext(Context);
  const [exchangePrice, setExchangePrice] = useState<api.ExchangePrice>();
  const [valueA, setValueA] = useState('1');
  const [valueB, setValueB] = useState('0');

  useEffect(() => {
    if (currentTokenA && currentTokenB) {
      setExchangePrice(undefined);
      api.getCurrentPrice(currentTokenA, currentTokenB).then(price => {
        setExchangePrice(price);
        setValueB(
          (Number(valueA) * (price?.a_to_b || 0)).toFixed(
            currentTokenA?.decimals,
          ),
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTokenA, currentTokenB]);

  function onSetValueA(value: string) {
    setValueA(value);
    setValueB(
      (Number(value) * (exchangePrice?.a_to_b || 0)).toFixed(
        currentTokenA?.decimals,
      ),
    );
  }
  function onSetValueB(value: string) {
    setValueB(value);
    setValueA(
      (Number(value) * (exchangePrice?.b_to_a || 0)).toFixed(
        currentTokenB?.decimals,
      ),
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.homeContent}>
          <Text style={styles.title}>Exchange tokens</Text>
          <View style={styles.tokensBlock}>
            <View style={styles.tokenWrapper}>
              <View style={styles.tokenTitle}>
                <ImageBackground
                  source={{uri: currentTokenA?.logoURI}}
                  style={styles.tokenIcon}
                />
                <View>
                  <Text style={styles.tokenSymbol}>
                    {currentTokenA?.symbol}
                  </Text>
                  <Text style={styles.tokenName}>{currentTokenA?.name}</Text>
                </View>
              </View>
              <View style={styles.tokenComponent}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  onChangeText={onSetValueA}
                  value={valueA}
                />
              </View>
            </View>
            <View style={styles.tokenWrapper}>
              <View style={styles.tokenTitle}>
                <ImageBackground
                  source={{uri: currentTokenB?.logoURI}}
                  style={styles.tokenIcon}
                />
                <View>
                  <Text style={styles.tokenSymbol}>
                    {currentTokenB?.symbol}
                  </Text>
                  <Text style={styles.tokenName}>{currentTokenB?.name}</Text>
                </View>
              </View>
              <View style={styles.tokenComponent}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  onChangeText={onSetValueB}
                  value={valueB}
                />
              </View>
              <View style={styles.tokenExchange}>
                <Text style={styles.tokenName}>
                  {currentTokenA?.symbol} ={' '}
                  {(exchangePrice?.a_to_b || 0).toFixed(
                    currentTokenA?.decimals,
                  )}{' '}
                  {currentTokenB?.symbol}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#590C78',
    height: '100%',
    width: '100%',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 15,
  },
  tokensBlock: {
    flexDirection: 'column',
    display: 'flex',
  },
  tokenComponent: {
    backgroundColor: 'white',
    // padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  tokenWrapper: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  tokenTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tokenIcon: {
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: 'aqua',
    marginRight: 15,
  },
  tokensReverse: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonReverse: {
    width: 35,
    height: 35,
  },
  tokenItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  homeContent: {
    flex: 1,
  },
  tokenSymbol: {
    color: 'white',
    fontWeight: '700',
  },
  tokenName: {
    color: 'white',
  },
  textInput: {
    width: '100%',
    paddingHorizontal: 16,
  },
  tokenExchange: {
    padding: 10,
  },
});
