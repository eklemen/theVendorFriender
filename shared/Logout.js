import React from 'react';
import {onSignOut} from './AuthRoute';

const Logout = ({navigation}) => {
  Promise.resolve(onSignOut()).then(() => {
    navigation.navigate('Login');
  }, () => {
    navigation.navigate('Login');
  });
  return null;
};

export default Logout;
