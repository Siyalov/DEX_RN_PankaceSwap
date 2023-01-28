import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  // Image,
} from 'react-native';
// import Test from './assets/test.svg';
// import { Svg } from 'react-native-svg';
import * as api from './api';
// import ModalWrapper from './components/ModalWrapper/ModalWrapper';
const defaultToken = {
  address: '',
  chainId: 0,
  decimals: 0,
  logoURI: '',
  name: '',
  symbol: '',
};


function App() {
  const [tokens, setTokens] = useState<api.TokensListResponse>({tokens: []});
  const [currentTokenA, setCurrentTokenA] = useState<api.TokenObject>(tokens?.tokens[0] || {});
  const [currentTokenB, setCurrentTokenB] = useState<api.TokenObject>(tokens?.tokens[1] || {});

  // function ModalWrapper({ children }) {
  //   return <View style={styles.modal}>{children}</View>;
  // }

  useEffect(() => {
    api.getTokensList().then(setTokens).then(() => {
      console.log(tokens.tokens)
    });
    // setTokens(await api.getTokensList());
    console.log(tokens)
  }, []);

  return (
      <>
      {/* <View style={styles.modal}>
        <View style={styles.modalBody}>
          <View style={styles.selectBlock}>
            {tokens?.tokens.map((token, i)  => (
                <TouchableOpacity key={i} style={styles.tokenItem}>
                  <View style={styles.tokenIcon} />
                  <View>
                    <Text>
                      {token.symbol} - {token.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View> 
        </View> */}
        <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose tokens</Text>
      <View style={styles.tokensBlock}>
        <TouchableOpacity style={styles.tokenComponent}>
          <View style={styles.tokenIcon} />
          <Text>{currentTokenA?.name}</Text>
        </TouchableOpacity>
        <View style={styles.tokensReverse}>
          <TouchableOpacity style={styles.buttonReverse}>
            {/* <Svg width={100} height={100}>
              <Test />
            </Svg> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.tokenComponent}>
          <View style={styles.tokenIcon} />
          <Text>{currentTokenB?.name}</Text>
        </TouchableOpacity>
          <View></View>
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
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  tokenIcon: {
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: 'red',
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
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  selectBlock: {
    maxHeight: '60%',
    width: '100%',
    backgroundColor: 'blue',
    overflow: 'scroll',
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
  },
  modalBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
  },
  tokenItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
});

export default App;