import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
} from 'react-native';
import {Context} from '../App';
import * as api from '../api';
import WatchButton from '../components/WatchButton';
import { TextInput } from 'react-native';


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
      <SafeAreaView style={styles.container}>
        <View style={styles.homeContent}>
          <Text style={styles.title}>Choose tokens</Text>
          <View style={styles.tokensBlock}>
            <View style={styles.tokenWrapper}>
              <View style={styles.tokenTitle}>
                <ImageBackground
                  source={{uri: currentTokenA?.logoURI}}
                  style={styles.tokenIcon}
                />
                <View> 
                <Text style={styles.tokenSymbol}>{currentTokenA?.symbol}</Text>
                <Text style={styles.tokenName}>{currentTokenA?.name}</Text>
                </View>                                
              </View>
              <View style={styles.tokenComponent}>
                <TextInput onChangeText={() => {}} value={'UDUUD'}></TextInput>
              </View>
            </View>
            <View style={styles.tokenWrapper}>
              <View style={styles.tokenTitle}>
                <ImageBackground
                  source={{uri: currentTokenB?.logoURI}}
                  style={styles.tokenIcon}
                />
                <Text>{currentTokenB?.name}</Text>
              </View>
              <View style={styles.tokenComponent}>
                <TextInput onChangeText={() => {}} value={'TRT'}></TextInput>
              </View>
            </View>
          </View>
        </View>
        <WatchButton onModal={() => {}} />
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
    flexDirection:'row',
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
    // backgroundColor: '#283785',
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
    fontWeight: 700,

  },
  tokenName: {
    color: 'white',    
  
  },
});
