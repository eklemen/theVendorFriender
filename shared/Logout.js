import React from 'react';
import {onSignOut} from './AuthRoute';
import {Spinner} from 'native-base';

const Logout = ({navigation}) => {
  Promise.resolve(onSignOut()).then(() => {
    navigation.navigate('Login');
  }, () => {
    navigation.navigate('Login');
  });
  return <Spinner />;
};

export default Logout;
