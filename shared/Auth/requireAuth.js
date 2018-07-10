import React from 'react';
import {AsyncStorage} from "react-native";

export default function(ProtectedRoute) {
  class Authentication extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this._checkAuth();
    }
    _checkAuth = async () => {
      const { navigation } = this.props;
      try {
        const token = await getToken();
        if(!token) navigation.navigate('Login');
      } catch (err) {
        console.log('_checkToken err: ', err);
      }
    };
    render() {
      return (
        <ProtectedRoute { ...this.props } />
      );
    }
  }

  return Authentication;
}

export const setToken = (token) => AsyncStorage.setItem('@vendorToken', token);
export const getToken = () => AsyncStorage.getItem('@vendorToken');

export const onSignOut = () => AsyncStorage.removeItem('@vendorToken');