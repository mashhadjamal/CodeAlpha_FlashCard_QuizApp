import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Introscreen from './Introscreen';
import MainScreen from './MainScreen';
const Stack = createNativeStackNavigator();

const _layout = () => {
  return (
    <Stack.Navigator initialRouteName='Introscreen'>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
      <Stack.Screen name="Introscreen" component={Introscreen} options={{headerShown:false}} />

     
    </Stack.Navigator>
  )
}

export default _layout

