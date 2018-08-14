import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
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

const TabNav = createBottomTabNavigator({
  Dashboard: {
    screen: requireAuth(Dashboard),
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  Home: {
    screen: requireAuth(Home),
    title: 'Home',
    navigationOptions: {
      title: 'Home',
    },
  },
});

export default createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerLeft: null,
      },
    },
    Dashboard: {
      screen: TabNav,
    },
    Home: {
      screen: TabNav,
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

