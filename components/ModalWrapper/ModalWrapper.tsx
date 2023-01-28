import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function ModalWrapper({ children }) {
  return <View style={styles.modal}>{children}</View>;
}


const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    zIndex: 3,
  },
})
