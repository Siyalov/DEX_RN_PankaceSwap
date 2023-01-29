import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function ModalWrapper({
  children,
  closeModal,
}: {
  children: any;
  closeModal: () => void;
}) {
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.modalClose}
        onPress={() => {
          console.log('close modal');
          closeModal();
        }}
      />
      <View style={styles.modalBody}>
        <ScrollView style={styles.selectBlock}>{children}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  modalClose: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 4,
  },
  modalBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    // height: 'fitContent',
    maxHeight: '80%',
    zIndex: 5,
    backgroundColor: '#FFAA00',
  },
  selectBlock: {
    width: '100%',
    backgroundColor: '#F5FAFA',
    // overflow: 'scroll',
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
  },
});
