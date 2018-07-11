import React from 'react';
import {createStackNavigator} from 'react-navigation';
/* Remove deprication warning */
import {YellowBox} from 'react-native'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
/* */
import Home from './Login/Home';
import Login from './Login/Login';
import Logout from './shared/Logout';
import requireAuth, {getToken} from './shared/Auth/requireAuth';
import Dashboard from './Dashboard/Dashboard';

export default createStackNavigator(
  {
    Login,
    Home: {
      screen: requireAuth(Home),
      title: 'Home',
    },
    Dashboard: {
      screen: requireAuth(Dashboard),
      title: 'Dashboard',
    },
    Logout,
  },
  {
    initialRouteName: getToken() ? 'Dashboard' : 'Login',
  }
);