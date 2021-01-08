import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import Card from './Card';

export default function Orders() {
  
  const handleOnPress = () => {
    
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',

  },
});
