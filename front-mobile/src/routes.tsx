import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from './Orders/OrderDetails';

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: false,
          cardStyle: {
            backgroundColor: '#fff'
          }, 
        }}
      >

        <Stack.Screen 
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} 
          name="Orders" 
          component={Orders}
        />
        <Stack.Screen 
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} 
          name="OrderDetails" 
          component={OrderDetails} 
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}