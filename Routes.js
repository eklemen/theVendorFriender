import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
/* Remove deprication warning */
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
/* */
import Home from './Login/Home';
import Login from './Login/Login';
import AuthUser from './Login/AuthUser';

const SignedOut = createStackNavigator({
    AuthUser: {
      screen: AuthUser,
      path: 'auth/callback',
    },
    Login,
  },
  {
    initialRouteName: 'Login',
  });
const SignedIn = createStackNavigator({
  Home
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};