import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './Login/Home';
import Login from './Login/Login';

export default createStackNavigator({
    Home: {
      screen: Home,
      path: 'auth/callback',
    },
    Login,
  },
  {
    initialRouteName: 'Login',
  });