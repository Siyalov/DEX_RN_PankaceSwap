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

function App() {
  const [tokens, setTokens] = useState<api.TokensListResponse>();

  useEffect(() => {
    api.getTokensList().then(setTokens);
    // setTokens(await api.getTokensList())
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose tokens</Text>
      <View style={styles.tokensBlock}>
        <View style={styles.tokenComponent}>
          <View style={styles.tokenIcon} />
          <Text>Token A</Text>
        </View>
        <View style={styles.tokensReverse}>
          <TouchableOpacity style={styles.buttonReverse}>
            {/* <Svg width={100} height={100}>
              <Test />
            </Svg> */}
          </TouchableOpacity>
        </View>
        <View style={styles.tokenComponent}>
          <View style={styles.tokenIcon} />
          <Text>Token B</Text>
        </View>
        <View>
          {tokens?.tokens.map(token => (
            <Text>
              {token.symbol} - {token.name}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
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
});

export default App;
