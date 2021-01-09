import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../Header';
import { Order } from '../../types';
import Card from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { confirmDelivery } from '../../api';

type Props = {
  route: {
    params:{
      order: Order
    }
  }
}

export default function OrderDetails({ route } : Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleNavigate = () => {
    
  }
  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
        navigation.navigate('Orders')
      })
      .catch(() => {
        Alert.alert(`Erro ao confirmar o pedido ${order.id}`)
      })
  }
  const handleOnCancel = () =>{
    navigation.navigate('Orders');
  }
  
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Card order={order} />
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleConfirmDelivery} style={styles.button}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleOnCancel} style={styles.button}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});
