import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
/* Remove deprication warning */
import {YellowBox} from 'react-native'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
/* */
import Home from './Login/Home';
import Login from './Login/Login';
import Logout from './shared/Logout';
import requireAuth from './Login/requireAuth';

export default createSwitchNavigator(
  {
    Login,
    Home: {
      screen: requireAuth(Home),
      title: 'Home',
    },
    Logout,
  },
  {
    initialRouteName: "Login",
  }
);