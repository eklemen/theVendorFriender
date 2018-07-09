import React from 'react';
import {getToken} from '../shared/AuthRoute';

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
        console.log('TOKEN++++++++++', token);
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