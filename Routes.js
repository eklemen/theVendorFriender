import React from 'react';
import {createStackNavigator} from 'react-navigation';
/* Remove deprication warning */
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
/* */
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