import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import { Order } from '../types';
import Card from './Card';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if(isFocused){
      setIsLoading(true);
      fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
        .finally(() => setIsLoading(false));
    }
  },[isFocused])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {orders.map(order => (
          <TouchableWithoutFeedback 
            onPress={() => handleOnPress(order)} 
            key={order.id}
          >
            <Card order={order}/>
          </TouchableWithoutFeedback>
        ))}
        
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
