import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Container, Header, Content, Button, Text } from 'native-base';
import TelaInicial from './screens/TelaInicial';
import TelaSecundaria from './screens/TelaSecundaria';

const AppNavigator = createStackNavigator(
  {
    TelaInicial: {
      screen: TelaInicial,
      navigationOptions: {
        title: 'Tela Inicial',
      },
    },
    TelaSecundaria: {
      screen: TelaSecundaria,
      navigationOptions: {
        title: 'Tela Secundária',
      },
    },
  },
  {
    initialRouteName: 'TelaInicial',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
