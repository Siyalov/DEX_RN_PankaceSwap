import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context} from '../contexts/appContext';
import ModalWrapper from '../components/ModalWrapper';
import WatchButton from '../components/WatchButton';
import {Props} from '../navigation/types';

export default function ({navigation}: Props<'Home'>) {
  const {
    currentTokenA,
    currentTokenB,
    setCurrentTokenA,
    setCurrentTokenB,
    tokens,
  } = useContext(Context);

  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);

  useEffect(() => {
    if (tokens) {
      setCurrentTokenA(tokens.tokens[0]);
      setCurrentTokenB(tokens.tokens[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens]);

  return (
    <>
      {modalAOpen ? (
        <ModalWrapper
          closeModal={() => {
            setModalAOpen(false);
          }}>
          {tokens?.tokens.map((token, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tokenItem}
              onPress={() => {
                setCurrentTokenA(token);
                setModalAOpen(false);
              }}>
              <ImageBackground
                source={{uri: token.logoURI || ''}}
                style={styles.tokenIcon}
              />
              <View>
                <Text>
                  {token.symbol} - {token.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ModalWrapper>
      ) : (
        ''
      )}

      {modalBOpen ? (
        <ModalWrapper
          closeModal={() => {
            setModalBOpen(false);
          }}>
          {tokens?.tokens.map((token, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tokenItem}
              onPress={() => {
                setCurrentTokenB(token);
                setModalBOpen(false);
              }}>
              <ImageBackground
                source={{uri: token.logoURI}}
                style={styles.tokenIcon}
              />
              <View>
                <Text>
                  {token.symbol} - {token.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ModalWrapper>
      ) : (
        ''
      )}

      <SafeAreaView style={styles.container}>
        <View style={styles.homeContent}>
          <Text style={styles.title}>Choose tokens</Text>
          <View style={styles.tokensBlock}>
            <TouchableOpacity
              style={styles.tokenComponent}
              onPress={() => setModalAOpen(true)}>
              {currentTokenA ? (
                <ImageBackground
                  source={{uri: currentTokenA?.logoURI}}
                  style={styles.tokenIcon}
                />
              ) : (
                ''
              )}
              <Text>{currentTokenA?.name}</Text>
            </TouchableOpacity>

            <View style={styles.tokensReverse}>
              <TouchableOpacity style={styles.buttonReverse}>
                {/* <Svg width={100} height={100}>
              <Test />
            </Svg> */}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.tokenComponent}
              onPress={() => setModalBOpen(true)}>
              {currentTokenB ? (
                <ImageBackground
                  source={{uri: currentTokenB?.logoURI}}
                  style={styles.tokenIcon}
                />
              ) : (
                ''
              )}
              <Text>{currentTokenB?.name}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <WatchButton
          onModal={() => {
            navigation.navigate('Exchange');
          }}
        />
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
});
