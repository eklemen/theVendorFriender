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
import EventDetail from './EventDetail/EventDetail';

export default createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerLeft: null,
      },
    },
    Home: {
      screen: requireAuth(Home),
      title: 'Home',
      navigationOptions: {
        title: 'Home',
      },
    },
    Dashboard: {
      screen: requireAuth(Dashboard),
      navigationOptions: {
        title: 'Dashboard',
      },
    },
    EventDetail: {
      screen: requireAuth(EventDetail),
      navigationOptions: {
        title: 'EventDetail',
      },
    },
    Logout,
  },
  {
    initialRouteName: getToken() ? 'Dashboard' : 'Login',
  }
);

