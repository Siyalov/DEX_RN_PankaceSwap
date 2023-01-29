import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface WatchButtonProps {
  onModal: () => void;
}

export default function WatchButton({onModal}: WatchButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={onModal} style={styles.button}>
        <Text style={styles.buttonText}>Watch</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    border: '2px solid #3785CC;',
    color: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    marginTop: 57,
    marginBottom: 53,
    borderRadius: 6,
    backgroundColor: '#3785CC',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
